import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import JSZip from 'jszip';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // In-memory backend storage for comments, messages, subscriptions
  const commentsStore: Record<string, Array<{ id: string; name: string; email: string; content: string; date: string; avatar: string }>> = {
    'mastering-3d-character-rigging-blender-2026': [
      {
        id: '',
        name: '',
        email: '',
        content: '',
        date: '',
        avatar: ''
      },
      {
        id: '',
        name: '',
        email: '',
        content: '',
        date: '',
        avatar: ''
      }
    ]
  };

  const contactMessages: Array<{ id: string; name: string; email: string; subject: string; message: string; date: string }> = [];
  const newsletterSubscribers: Set<string> = new Set(['user@example.com']);

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact API
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const newMessage = {
      id: 'msg_' + Date.now(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      date: new Date().toISOString()
    };
    contactMessages.push(newMessage);
    console.log('Received contact message:', newMessage);
    return res.json({ success: true, message: 'Message received successfully!', data: newMessage });
  });

  // Newsletter API
  app.post('/api/newsletter', (req, res) => {
    const { email } = req.body || {};
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email address is required.' });
    }
    newsletterSubscribers.add(email);
    return res.json({ success: true, message: 'Subscribed to newsletter successfully!' });
  });

  // Comments API
  app.get('/api/comments/:postSlug', (req, res) => {
    const { postSlug } = req.params;
    const comments = commentsStore[postSlug] || [];
    res.json({ success: true, comments });
  });

  app.post('/api/comments/:postSlug', (req, res) => {
    const { postSlug } = req.params;
    const { name, email, content } = req.body || {};

    if (!name || !content) {
      return res.status(400).json({ error: 'Name and comment text are required.' });
    }

    if (!commentsStore[postSlug]) {
      commentsStore[postSlug] = [];
    }

    const newComment = {
      id: 'comment_' + Date.now(),
      name,
      email: email || '',
      content,
      date: new Date().toISOString().split('T')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`
    };

    commentsStore[postSlug].unshift(newComment);
    return res.json({ success: true, comment: newComment });
  });

  // ZIP Source Code Exporter API
  app.get('/api/download-zip', async (_req, res) => {
    try {
      const zip = new JSZip();
      const rootDir = process.cwd();

      // Recursive helper to add files to zip while skipping heavy build output
      async function addFilesRecursively(currentPath: string, zipFolder: JSZip) {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
          if (file === 'node_modules' || file === 'dist' || file === '.git' || file === '.DS_Store' || file === 'server.cjs') {
            continue;
          }

          const fullPath = path.join(currentPath, file);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            const subFolder = zipFolder.folder(file);
            if (subFolder) {
              await addFilesRecursively(fullPath, subFolder);
            }
          } else {
            const content = fs.readFileSync(fullPath);
            zipFolder.file(file, content);
          }
        }
      }

      await addFilesRecursively(rootDir, zip);

      // Add a helpful README.md for local setup
      const readmeContent = `# 3D Animation Studio Portfolio & Blog

This is a complete, production-ready 3D Animation & Motion Graphics Portfolio & Blog website built with React, TypeScript, Vite, Tailwind CSS, Three.js, Motion, and an Express backend.

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup Steps
1. Extract this zip file to your preferred directory.
2. Open terminal in the project directory.
3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
4. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open your browser at:
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📦 Production Build
To create a production build and run in Node.js:
\`\`\`bash
npm run build
npm start
\`\`\`

## Features
- 🎮 Interactive 3D Canvas scenes with Three.js
- 📁 Filterable Portfolio with 3D Modal Viewer & Video Preview
- 📝 Full-Featured Blog with Search, Tags, & Interactive Comment system
- 💼 Services Showcase with Interactive Pricing Calculator
- 📊 Animated Stats Counter & Skills Timeline
- 💬 Client Testimonials Slider
- 📧 Contact Form with Express Backend API & Map Integration
- 🌓 Dark/Light Mode Persistence
- 📦 Built-in ZIP exporter API & UI
`;

      zip.file('README_RUN_INSTRUCTIONS.md', readmeContent);

      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="3d-animation-portfolio-source.zip"');
      res.setHeader('Content-Length', zipBuffer.length.toString());
      return res.send(zipBuffer);
    } catch (err) {
      console.error('Failed to create ZIP package:', err);
      return res.status(500).json({ error: 'Failed to generate ZIP archive' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

startServer();

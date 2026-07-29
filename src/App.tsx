import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ZipDownloadModal } from './components/ZipDownloadModal';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { ScrollFrameBackground } from './components/ScrollFrameBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('vance3d_theme');
    return saved ? saved === 'dark' : true; // Default dark mode
  });

  const [zipModalOpen ] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  // Handle dark / light mode body class
  useEffect(() => {
    localStorage.setItem('vance3d_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [darkMode]);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceOrPlan = (subjectTitle: string) => {
    setContactSubject(`Inquiry for ${subjectTitle}`);
    handleNavigateSection('contact');
  };

  return (
    <div className={`min-h-screen relative text-slate-100 ${darkMode ? 'bg-[#090d16]' : 'bg-slate-50 text-slate-900'}`}>
      {/* Scroll-Driven Frame Animation Background */}
      <ScrollFrameBackground />

      {/* Custom Glow Cursor */}
      <CustomCursor />

      {/* Sticky Header Navbar */}
      <div className="relative z-20">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}

          onOpenContactModal={() => handleNavigateSection('contact')}
        />
      </div>

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Fullscreen Interactive 3D Hero */}
        <Hero
          onViewPortfolio={() => handleNavigateSection('portfolio')}
          onContactMe={() => handleNavigateSection('contact')}

        />

        {/* Animated Statistics Counter */}
        <StatsSection />

        {/* Portfolio Showcase Grid & 3D Modals */}
        <PortfolioSection />

        {/* Services & Pricing Calculator */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceOrPlan} />

        {/* About Director, Software Skill Bars & Timeline */}
        <AboutSection />

        {/* Concept Render Masonry Gallery & Lightbox */}
        <GallerySection />

        {/* Client Testimonials Slider */}
        <TestimonialsSection />

        {/* Complete Blog & Single Post System */}
        <BlogSection />

        {/* Transparent Pricing Tiers */}
        <PricingSection onSelectPlan={handleSelectServiceOrPlan} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact Form & Map */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer
          onNavigate={handleNavigateSection}

        />
      </div>

      {/* Back To Top Floating Trigger */}
      <BackToTop />


    </div>
  );
}

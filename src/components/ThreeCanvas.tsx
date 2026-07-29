import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  type?: 'hero' | 'helmet' | 'orb' | 'sneaker' | 'bg-particles' | 'mech';
  interactive?: boolean;
  wireframeToggle?: boolean;
  colorTheme?: 'purple' | 'blue' | 'cyan' | 'gold';
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  type = 'hero',
  interactive = true,
  wireframeToggle = false,
  colorTheme = 'purple',
  className = 'w-full h-full'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState(false);
  const [wireframeSupported, setWireframeSupported] = useState(wireframeToggle);

  useEffect(() => {
    setWireframeSupported(wireframeToggle);
  }, [wireframeToggle]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = type === 'bg-particles' ? 12 : 6;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Clear previous canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. Color palette based on theme
    let mainColor = 0x8b5cf6; // Purple
    let secondColor = 0x3b82f6; // Blue
    let accentColor = 0x06b6d4; // Cyan

    if (colorTheme === 'blue') {
      mainColor = 0x2563eb;
      secondColor = 0x06b6d4;
      accentColor = 0x38bdf8;
    } else if (colorTheme === 'cyan') {
      mainColor = 0x0891b2;
      secondColor = 0x06b6d4;
      accentColor = 0xa855f7;
    } else if (colorTheme === 'gold') {
      mainColor = 0xf59e0b;
      secondColor = 0xd97706;
      accentColor = 0xf39c12;
    }

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(mainColor, 3.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(secondColor, 3.0);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(accentColor, 4, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 5. Construct Objects based on Type
    let mainMesh: THREE.Mesh | THREE.Points | null = null;
    let outerMesh: THREE.Mesh | null = null;
    let particleSystem: THREE.Points | null = null;

    if (type === 'hero') {
      // Futuristic Torus Knot
      const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);
      const material = new THREE.MeshPhysicalMaterial({
        color: mainColor,
        roughness: 0.15,
        metalness: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe: isWireframe,
        emissive: new THREE.Color(mainColor),
        emissiveIntensity: 0.15
      });
      mainMesh = new THREE.Mesh(geometry, material);
      mainGroup.add(mainMesh);

      // Outer Ring
      const ringGeo = new THREE.TorusGeometry(2.4, 0.04, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color: accentColor, wireframe: true });
      outerMesh = new THREE.Mesh(ringGeo, ringMat);
      outerMesh.rotation.x = Math.PI / 3;
      mainGroup.add(outerMesh);

      // Particle Field
      const particleCount = 200;
      const particlesGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 15;
        positions[i + 1] = (Math.random() - 0.5) * 15;
        positions[i + 2] = (Math.random() - 0.5) * 15;
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: accentColor,
        transparent: true,
        opacity: 0.7
      });
      particleSystem = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particleSystem);
    } else if (type === 'helmet' || type === 'mech') {
      // Faceted Cyber Icosahedron Core
      const geometry = new THREE.IcosahedronGeometry(1.5, 2);
      const material = new THREE.MeshStandardMaterial({
        color: mainColor,
        roughness: 0.2,
        metalness: 0.9,
        wireframe: isWireframe,
        flatShading: true
      });
      mainMesh = new THREE.Mesh(geometry, material);
      mainGroup.add(mainMesh);

      // Wireframe overlay shell
      const wireGeo = new THREE.IcosahedronGeometry(1.65, 1);
      const wireMat = new THREE.MeshBasicMaterial({ color: accentColor, wireframe: true, transparent: true, opacity: 0.4 });
      outerMesh = new THREE.Mesh(wireGeo, wireMat);
      mainGroup.add(outerMesh);
    } else if (type === 'orb') {
      // Glass Crystal Orb
      const geometry = new THREE.SphereGeometry(1.5, 64, 64);
      const material = new THREE.MeshPhysicalMaterial({
        color: secondColor,
        transmission: 0.9,
        opacity: 1,
        transparent: true,
        roughness: 0.05,
        ior: 1.5,
        reflectivity: 0.9,
        clearcoat: 1.0,
        wireframe: isWireframe
      });
      mainMesh = new THREE.Mesh(geometry, material);
      mainGroup.add(mainMesh);

      // Internal glowing octahedron
      const innerGeo = new THREE.OctahedronGeometry(0.8, 0);
      const innerMat = new THREE.MeshStandardMaterial({ color: accentColor, emissive: accentColor, emissiveIntensity: 1.2 });
      outerMesh = new THREE.Mesh(innerGeo, innerMat);
      mainGroup.add(outerMesh);
    } else if (type === 'sneaker') {
      // Sleek Dodecahedron Product Box
      const geometry = new THREE.DodecahedronGeometry(1.5, 0);
      const material = new THREE.MeshStandardMaterial({
        color: accentColor,
        metalness: 0.8,
        roughness: 0.2,
        wireframe: isWireframe
      });
      mainMesh = new THREE.Mesh(geometry, material);
      mainGroup.add(mainMesh);
    } else {
      // Background Particles Only
      const particleCount = 400;
      const particlesGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particlesMat = new THREE.PointsMaterial({
        size: 0.06,
        color: mainColor,
        transparent: true,
        opacity: 0.5
      });
      particleSystem = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particleSystem);
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / width - 0.5) * 2;
      mouseY = (y / height - 0.5) * 2;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Window Resize Listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth || 400;
      const newHeight = containerRef.current.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Interp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Group Rotations
      if (mainMesh) {
        mainMesh.rotation.y = elapsedTime * 0.4 + targetX * 0.5;
        mainMesh.rotation.x = elapsedTime * 0.2 + targetY * 0.5;
      }

      if (outerMesh) {
        outerMesh.rotation.y = -elapsedTime * 0.6;
        outerMesh.rotation.z = elapsedTime * 0.3;
      }

      if (particleSystem) {
        particleSystem.rotation.y = elapsedTime * 0.05;
      }

      // Light orbit
      pointLight.position.x = Math.sin(elapsedTime * 1.5) * 3;
      pointLight.position.y = Math.cos(elapsedTime * 1.5) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      renderer.dispose();
    };
  }, [type, interactive, isWireframe, colorTheme]);

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="w-full h-full min-h-[250px]" />

      {wireframeSupported && (
        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-mono rounded-lg glass-panel hover:bg-white/10 text-slate-200 transition-all z-10 flex items-center gap-1.5 border border-white/10"
          title="Toggle Wireframe Shader Mode"
        >
          <span className={`w-2 h-2 rounded-full ${isWireframe ? 'bg-cyan-400 animate-ping' : 'bg-purple-500'}`} />
          {isWireframe ? 'Shaded Mode' : 'Wireframe 3D'}
        </button>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Disc, Menu, X, Download, Sun, Moon, ArrowUpRight, Code2, DiscIcon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenZipModal: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  darkMode,
  setDarkMode,
  onOpenZipModal,
  onOpenContactModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-panel border-b border-white/10 shadow-2xl backdrop-blur-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <DiscIcon className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="text-left">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
              Calliqo<span className="text-purple-400"> BD</span>
            </span>
            <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              Agency
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/20 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Download ZIP button */}
          {/* <button
            onClick={onOpenZipModal}
            className=""
            title=""
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span></span>
          </button> */}

          {/* Dark / Light Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-500/50 transition-all"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button> */}

          {/* CTA Hire Me */}
          <button
            onClick={() => {
              if (onOpenContactModal) {
                onOpenContactModal();
              } else {
                handleNavClick('contact');
              }
            }}
            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-cyan-400 hover:text-white text-white shadow-lg shadow-purple-500/25 transition-all duration-300 active:scale-95"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950/20 rounded-[10px] group-hover:bg-transparent flex items-center gap-1.5">
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg glass-panel text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-panel text-slate-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 mt-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZipModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                
                <span></span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('contact');
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
              >
                <span>Get In Touch (Hire Me)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

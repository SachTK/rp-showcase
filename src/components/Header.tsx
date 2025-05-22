
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'literature', label: 'Literature' },
  { id: 'problems', label: 'Problems' },
  { id: 'gaps', label: 'Research Gaps' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'methodologies', label: 'Methodology' },
  { id: 'tools', label: 'Tools' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'downloads', label: 'Documents' },
  { id: 'about', label: 'About Us' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl flex items-center">
          <span className="text-research-darkBlue">ML</span>
          <span className="text-research-green">Veggies</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className="text-sm hover:text-research-green"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-research-darkBlue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-2 text-research-darkBlue hover:text-research-green cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

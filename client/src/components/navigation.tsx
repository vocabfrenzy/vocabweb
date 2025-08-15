import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-orange rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧠</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Vocab Frenzy Fr</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-orange-custom transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('screenshots')}
              className="text-gray-700 hover:text-orange-custom transition-colors"
              data-testid="nav-screenshots"
            >
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-700 hover:text-orange-custom transition-colors"
              data-testid="nav-download"
            >
              Download
            </button>
            <Link
              href="/support"
              className="text-gray-700 hover:text-orange-custom transition-colors"
              data-testid="nav-support"
            >
              Support
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://apps.apple.com/ca/app/vocab-frenzy-fr/id6747328745"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              data-testid="nav-download-btn"
            >
              Download Free
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              data-testid="mobile-menu-btn"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-orange-custom transition-colors py-2"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('screenshots')}
                className="text-left text-gray-700 hover:text-orange-custom transition-colors py-2"
                data-testid="mobile-nav-screenshots"
              >
                Screenshots
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="text-left text-gray-700 hover:text-orange-custom transition-colors py-2"
                data-testid="mobile-nav-download"
              >
                Download
              </button>
              <Link
                href="/support"
                className="text-left text-gray-700 hover:text-orange-custom transition-colors py-2"
                data-testid="mobile-nav-support"
              >
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

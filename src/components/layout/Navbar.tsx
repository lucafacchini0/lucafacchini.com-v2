import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Avatar from '../ui/Avatar';
import NavLink from '../ui/NavLink';
import { personalInfo } from '../../data/personal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Avatar src={personalInfo.avatar} alt={personalInfo.name} size="sm" />
            <span className="font-semibold text-lg text-gray-900">{personalInfo.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Projects
            </button>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

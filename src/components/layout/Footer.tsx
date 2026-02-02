import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { personalInfo } from '../../data/personal';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar src={personalInfo.avatar} alt={personalInfo.name} size="md" />
              <span className="font-semibold text-lg text-gray-900">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-gray-600">
              Building modern web applications with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Projects
              </button>
              <Link to="/blog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

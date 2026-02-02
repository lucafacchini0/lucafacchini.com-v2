import { Mail, Github, Linkedin } from 'lucide-react';
import Container from '../components/layout/Container';
import ContactForm from '../components/contact/ContactForm';
import { personalInfo } from '../data/personal';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below
            or through any of my social channels.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Alternative Contact Methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

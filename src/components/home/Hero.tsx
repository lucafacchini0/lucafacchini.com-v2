import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Button from '../ui/Button';
import ScrollDownIcon from '../ui/ScrollDownIcon';
import { personalInfo } from '../../data/personal';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-white to-gray-50">
      <Container className="text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Software Developer & Designer based in {personalInfo.location}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
          <Link to="/blog">
            <Button variant="secondary" size="lg">Read My Blog</Button>
          </Link>
        </div>
      </Container>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8">
        <ScrollDownIcon targetId="about" />
      </div>
    </section>
  );
}

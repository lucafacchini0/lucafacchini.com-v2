import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Button from '../ui/Button';

export default function ContactPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Me</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

import Container from '../layout/Container';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

export default function MyProjects() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

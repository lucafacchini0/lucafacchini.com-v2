import Container from '../layout/Container';
import EducationItem from './EducationItem';
import { education } from '../../data/education';

export default function MyEducation() {
  return (
    <section id="education" className="py-16 lg:py-24 bg-white">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center">
          My Education
        </h2>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              location={item.location}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

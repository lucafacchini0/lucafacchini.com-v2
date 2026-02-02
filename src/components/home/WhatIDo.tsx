import Container from '../layout/Container';
import WhatIDoCard from './WhatIDoCard';
import { whatIDo } from '../../data/whatIDo';

export default function WhatIDo() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {whatIDo.map((item, index) => (
            <WhatIDoCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

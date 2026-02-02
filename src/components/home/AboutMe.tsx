import { User, MapPin, Calendar } from 'lucide-react';
import Container from '../layout/Container';
import Avatar from '../ui/Avatar';
import PersonalInfo from '../shared/PersonalInfo';
import { personalInfo } from '../../data/personal';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Personal Info */}
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start mb-8">
              <Avatar src={personalInfo.avatar} alt={personalInfo.name} size="xl" />
            </div>

            <div className="space-y-4">
              <PersonalInfo
                label="Name"
                value={personalInfo.name}
                icon={<User size={20} />}
              />
              <PersonalInfo
                label="Age"
                value={personalInfo.age}
                icon={<Calendar size={20} />}
              />
              <PersonalInfo
                label="Location"
                value={personalInfo.location}
                icon={<MapPin size={20} />}
              />
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

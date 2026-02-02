import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export default function EducationItem({
  degree,
  institution,
  location,
  period,
  description,
}: EducationItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -ml-[5px] w-3 h-3 rounded-full bg-blue-600" />

      {/* Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <GraduationCap className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{degree}</h3>
            <p className="text-sm text-gray-600 mb-1">{institution}</p>
            <p className="text-sm text-gray-500 mb-2">{location} • {period}</p>
            {description && (
              <p className="text-sm text-gray-600 mt-3">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

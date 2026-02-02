import { ArrowRight } from 'lucide-react';

interface WhatIDoCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function WhatIDoCard({ title, description, link }: WhatIDoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          Learn more <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
}

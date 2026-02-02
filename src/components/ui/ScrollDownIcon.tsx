import { ChevronDown } from 'lucide-react';

interface ScrollDownIconProps {
  targetId: string;
}

export default function ScrollDownIcon({ targetId }: ScrollDownIconProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
      aria-label="Scroll down"
    >
      <ChevronDown size={32} />
    </button>
  );
}

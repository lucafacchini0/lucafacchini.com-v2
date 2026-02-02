import { ReactNode } from 'react';

interface PersonalInfoProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

export default function PersonalInfo({ label, value, icon }: PersonalInfoProps) {
  return (
    <div className="flex items-center gap-3">
      {icon && <div className="text-blue-600">{icon}</div>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}

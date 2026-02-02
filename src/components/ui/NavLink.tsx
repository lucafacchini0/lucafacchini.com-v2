import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ to, children, onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
        isActive ? 'text-blue-600' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}

import { Link } from 'react-router-dom';

export const LinkItem = ({ to, label, location, onClick }) => (
  <li>
    <Link
      onClick={onClick}
      className={`w-full block py-4 px-2 lg:px-4 ${
        location.pathname === to ? 'underline' : ''
      }`}
      to={to}
    >
      {label}
    </Link>
  </li>
);

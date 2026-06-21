import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/search', label: 'Search' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-accent font-semibold border-b-2 border-accent pb-1'
      : 'text-white hover:text-accent transition-colors duration-200';

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <nav className="container-max">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">HB</span>
            </div>
            <span className="text-xl font-bold text-white">BookingHub</span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-accent hover:bg-yellow-400 text-primary px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-accent"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-dark border-t border-primary px-4 py-3 space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded ${
                    isActive ? 'bg-primary text-accent' : 'text-white hover:bg-primary'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 text-white hover:bg-primary rounded"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 bg-accent text-primary rounded font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

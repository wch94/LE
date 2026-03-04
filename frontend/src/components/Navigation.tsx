import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-team', label: 'Our Team' },
  { to: '/about', label: 'About' },
  { to: '/companies', label: 'Companies' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/contact', label: 'Contact L&E' },
];

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const linkClass = (to: string) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      location.pathname === to
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-white text-lg font-bold tracking-wide flex-shrink-0 hover:text-blue-300 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Lauterbach &amp; Eilber
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggle}
              className="ml-2 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800 pt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={linkClass(link.to)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

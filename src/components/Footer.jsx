import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">HB</span>
              </div>
              <span className="text-xl font-bold">BookingHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Find and book the best hotels, apartments, and stays for your next trip.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { to: '/', label: 'Home' },
                { to: '/search', label: 'Search' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 list-none p-0 m-0 text-sm text-gray-300">
              <li>📧 support@bookinghub.com</li>
              <li>📍 Kigali, Rwanda</li>
              <li>📞 +250 780 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} BookingHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com', label: 'GitHub' },
              { href: 'https://linkedin.com', label: 'LinkedIn' },
              { href: 'https://twitter.com', label: 'Twitter' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

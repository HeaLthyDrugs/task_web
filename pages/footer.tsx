import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-2 absolute bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Task by HeaLthyDrugs.
        </p>
        <nav className="flex gap-4">
          <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Privacy Policy</a>
          <a href="/terms" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Terms of Service</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

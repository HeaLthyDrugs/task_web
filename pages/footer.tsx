import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-2 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Task by HeaLthyDrugs.
        </p>
        <nav className="flex gap-4">
          <a 
            href="mailto:dotfordot2003@gmail.com" 
            className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm"
          >
            Mail
          </a>
          <a 
            href="https://wa.me/+918432563227" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm"
          >
            Whatsapp
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

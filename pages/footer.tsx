'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

const Footer: React.FC = () => {
  const placeholders = [
    "Ready to build something extraordinary?",
    "Let's turn your vision into reality...",
    "Your next big project starts here →",
    "Innovation awaits. Drop your email.",
    "Join the architects of tomorrow.",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <footer className="bg-white py-4 mt-auto">
      <Modal>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
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

          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <span>Built with</span>
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Next.js</a>
                <span>•</span>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Tailwind CSS</a>
              </div>
              <div>
                <ModalTrigger
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-400"
                >
                  <span className="text-sm font-regular text-green-600">Hire @HeaLthyDrugs as a Freelancer</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform duration-200 hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent className="p-6 max-w-sm mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Let's Work Together!</h2>
                    <p className="text-gray-500 mb-6">
                    Drop your message and let's discuss about your project.
                    </p>

                    <div className="space-y-4">
                      <a
                        href="mailto:dotfordot2003@gmail.com"
                        className="flex items-center"
                      >
                        <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                          Chat on WhatsApp
                        </button>
                      </a>
                    </div>

                    <div className="relative my-10">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500"></span>
                      </div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <p className="text-gray-500 mb-6">
                        Drop in your email ID and I will get back to you.
                        </p>
                        <PlaceholdersAndVanishInput
                          placeholders={placeholders}
                          onChange={handleChange}
                          onSubmit={onSubmit}
                        />
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                          Send
                        </button>
                      </div>
                    </form>
                  </ModalContent>
                </ModalBody>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;

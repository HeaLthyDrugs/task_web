"use client";
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion } from 'framer-motion';
import { MdOutlineDesignServices } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

export default function Features() {
    const features = [
        {
          title: "Clean Design",
          description: "No clutter, no distractions. Just you and your tasks.",
          icon: <MdOutlineDesignServices className="w-16 h-16 text-gray-900 dark:text-gray-700 mb-4" />
        },
        {
          title: "Smart Reminders",
          description: "Never miss what matters. Get notified at the right time.",
          icon: <IoNotifications className="w-16 h-16 text-gray-900 dark:text-gray-700 mb-4" />
        },
        {
          title: "Quick Setup",
          description: "Start organizing in seconds. No tutorials needed.",
          icon: <FiSettings className="w-16 h-16 text-gray-900 dark:text-gray-700 mb-4" />
        },
      ];

  return (
    <div className="dark:bg-black-100 bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-600">
        Why use Task?
      </h1>
      <div className="space-y-8 py-20 w-full max-w-4xl px-4 sm:px-6 md:px-8">
        {features.map((feature, index) => (
            <CardSpotlight key={index} className='h-80 w-full p-6 sm:p-10 rounded-3xl'>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                </p>
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10">
                    {feature.icon}
                </div>
            </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

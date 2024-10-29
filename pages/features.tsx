"use client";
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
          title: "Clean Design",
          description: "No clutter, no distractions. Just you and your tasks.",
        },
        {
          title: "Smart Reminders",
          description: "Never miss what matters. Get notified at the right time.",
        },
        {
          title: "Quick Setup",
          description: "Start organizing in seconds. No tutorials needed.",
        },
      ];

  return (
    <div className="dark:bg-black-100 bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-600">
        Why use Task?
      </h1>
        <div className="space-y-8 pt-32">
        {features.map((feature, index) => (
            <CardSpotlight className='h-80 w-full p-10 rounded-3xl'>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-black">
                    {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                </p>
            </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

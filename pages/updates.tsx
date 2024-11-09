'use client';

import { SparklesCore } from "@/components/ui/sparkles";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Updates() {
    const [downloadCount, setDownloadCount] = useState(0);
    const downloadTarget = 777;
    const progressPercentage = (downloadCount / downloadTarget) * 100;

    const futureUpdates = {
        title: "Features which can be added in future",
        features: [
            {
                name: "Smart Notes",
                description: "Create, organize, and share notes with AI-powered suggestions",
                eta: "June 2025"
            },
            {
                name: "Voice Commands",
                description: "Control the app hands-free with natural language commands",
                eta: "July 2025"
            },
        ]
    };

    const buttonControls = useAnimation();
    const [isDownloading, setIsDownloading] = useState(false);

    const [suggestion, setSuggestion] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Fetch initial download count
    useEffect(() => {
        const fetchDownloadCount = async () => {
            try {
                const { count, error } = await supabase
                    .from('downloads')
                    .select('*', { count: 'exact' });
                
                if (error) throw error;
                setDownloadCount(count || 0);
            } catch (error) {
                console.error('Error fetching download count:', error);
            }
        };

        fetchDownloadCount();

        // Subscribe to real-time changes
        const subscription = supabase
            .channel('downloads')
            .on('postgres_changes', 
                { event: 'INSERT', schema: 'public', table: 'downloads' },
                (payload) => {
                    setDownloadCount(prev => prev + 1);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleSubmitSuggestion = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!suggestion.trim()) return;
        
        setIsSubmitting(true);
        
        try {
            const { error } = await supabase
                .from('feature_suggestions')
                .insert([
                    { suggestion: suggestion.trim() }
                ]);

            if (error) throw error;

            // Clear form and show success
            setSuggestion('');
            setShowSuccess(true);
            
            // Hide success message after 3 seconds
            setTimeout(() => setShowSuccess(false), 3000);
            
        } catch (error: any) {
            console.error('Error submitting suggestion:', error);
            // If using toast
            console.error('Failed to submit suggestion. Please try again.');
            // Or use alert
            // alert('Failed to submit suggestion. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="dark:bg-black-100 bg-white flex flex-col items-center p-6 gap-6">
            <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 text-gray-600">
                Future Updates
            </h1>
            {/* Future Updates Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-2xl p-8 rounded-3xl shadow-lg bg-black dark:bg-black relative"
            >
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                <h2 className="text-2xl font-semibold mb-6 text-white dark:text-white">
                    {futureUpdates.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">These are the features which can be added in future updates. If you have any suggestions, please submit them below.</p>
                <div className="grid gap-6 bg-black">
                    {futureUpdates.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors bg-black"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-white dark:text-white">{feature.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                                <span className="text-xs text-blue-600 dark:text-blue-400 mt-2 inline-block">Expected: {feature.eta}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Add this suggestion form before the Progress bar section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl p-8 rounded-3xl shadow-lg bg-black dark:bg-black"
            >
                <h2 className="text-2xl font-semibold mb-6 text-white dark:text-white">
                    Suggest a Feature
                </h2>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg"
                    >
                        Thank you for your suggestion! We'll review it and consider it for future updates.
                    </motion.div>
                )}
                <form onSubmit={handleSubmitSuggestion} className="space-y-4">
                    <div>
                        <textarea
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            placeholder="What feature would you like to see in future updates?"
                            className="w-full p-3 border bg-gray-800 border-gray-700 text-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || !suggestion.trim()}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
                    </button>
                </form>
            </motion.div>

            {/* Progress bar section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl p-10 rounded-3xl shadow-lg bg-black dark:bg-black pb-12"
            >
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-semibold mb-2 text-white dark:text-white">Download Milestone</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Reach the goal of {downloadTarget} downloads to unlock the next feature</p>
                </div>
                <div className="mt-0">
                    <div className="flex justify-between text-sm text-white dark:text-gray-300 mb-2">
                        <span className="text-white dark:text-gray-300 text-sm">{downloadCount} current downloads</span>
                        <span className="text-white dark:text-gray-300 text-sm">{downloadTarget - downloadCount} downloads to go</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 1 }}
                            className="bg-blue-600 h-3 rounded-full relative"
                        >
                            {progressPercentage >= 10 && (
                                <span className="absolute right-0 top-5 text-xs font-medium text-blue-600 dark:text-blue-400">
                                    {Math.round(progressPercentage)}%
                                </span>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

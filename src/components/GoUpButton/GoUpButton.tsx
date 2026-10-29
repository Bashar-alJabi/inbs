import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import { motion } from "framer-motion";

const GoUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity z-50"
                aria-label="Go to top"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowUpCircle size={24} />
            </motion.button>
            )}
        </>
    );
};

export default GoUpButton;

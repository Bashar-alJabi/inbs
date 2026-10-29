import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isBlending, setIsBlending] = useState(false);

    useEffect(() => {
        const moveCursor = (e: { clientX: any; clientY: any; }) => {
            setCursorPosition({ x: e.clientX - 4, y: e.clientY - 4});
        };

        window.addEventListener('mousemove', moveCursor);

        // Add hover event listeners to all clickable elements
        const clickableElements = document.querySelectorAll('a, button, input, .clickable');
        clickableElements.forEach((el) => {
            el.addEventListener('mouseenter', () => setIsHovering(true));
            el.addEventListener('mouseleave', () => setIsHovering(false));
        });

        // Add hover event listeners to all blending elements
        const blendingElements = document.querySelectorAll('.blending');
        blendingElements.forEach((el) => {
            el.addEventListener('mouseenter', () => setIsBlending(true));
            el.addEventListener('mouseleave', () => setIsBlending(false));
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickableElements.forEach((el) => {
                el.removeEventListener('mouseenter', () => setIsHovering(true));
                el.removeEventListener('mouseleave', () => setIsHovering(false));
            });
            blendingElements.forEach((el) => {
                el.removeEventListener("mouseenter", () => setIsBlending(true));
                el.removeEventListener("mouseleave", () => setIsBlending(false));
            });
        };
    }, []);

    return (
        <motion.div
            className={`${isHovering  && 'mix-blend-difference'} fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50`}
            style={{
                x: cursorPosition.x,
                y: cursorPosition.y,
            }}
            animate={{
                scale: isHovering ? 2 : 1,
                backgroundColor: isHovering ? '#fff' : isBlending ? "#000" : '#125493',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        />
    );
};

export default CustomCursor;

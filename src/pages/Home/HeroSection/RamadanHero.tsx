import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Light = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
    <motion.div
        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
        style={{ top, left }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
    />
);
const Star = ({ left, delay }: { left: string; delay: number }) => (
    <motion.div
        style={{ left }}
        animate={{ y: [-25, window.innerHeight], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, delay }}
        className="absolute w-8"
    >
        🌟
    </motion.div>
);
const Moon = ({ left, delay }: { left: string; delay: number }) => (
    <motion.div
        style={{ left }}
        animate={{ y: [-25, window.innerHeight], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, delay }}
        className="absolute w-8"
    >
        🌙
    </motion.div>
);

const RamadanHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { t } = useTranslation();

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Carousel data
    const slides = [
        {
            image: '/Images/Ramadan/RamadanHero1.png',
            description: t('RamadanHeroD1'),
        },
        {
            image: '/Images/Ramadan/RamadanHero2.png',
            description: t('RamadanHeroD2'),
        },
    ];

    const letterVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, type: 'spring', stiffness: 120 },
        }),
    };

    return (
        <section className="relative overflow-hidden">
            {/* Carousel container */}
            <div className="relative h-[calc(100dvh-4rem)]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={`Hero ${index + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                            {/* Dark overlay */}
                            {/* <div className="absolute inset-0 bg-black/50"></div> */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" /> */}
                        </div>

                        <>
                            <Light top="20%" left="30%" delay={0} />
                            <Light top="10%" left="50%" delay={1} />
                            <Light top="15%" left="70%" delay={1.5} />
                            <Star left="10%" delay={4} />
                            <Moon left="30%" delay={6} />
                            <Star left="50%" delay={0} />
                            <Moon left="70%" delay={2} />
                            <Star left="90%" delay={8} />
                            {/* Hanging Lanterns */}
                            {/* <motion.div
                                initial={{ y: -20 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
                                className="absolute bottom-12 md:bottom-16 right-8 md:right-10 text-yellow-300 text-3xl md:text-5xl"
                            >
                                🏮
                            </motion.div>
                            <motion.div
                                initial={{ y: -20 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', delay: 1 }}
                                className="absolute bottom-16 md:bottom-24 right-12 md:right-20 text-yellow-300 text-2xl md:text-4xl"
                            >
                                🏮
                            </motion.div> */}
                        </>

                        {/* Content */}
                        <div className="relative h-full w-fit flex items-center justify-center mx-auto text-center">
                            <div className="container mx-auto px-4">
                                <motion.div
                                    className="max-w-2xl text-primary-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.h1
                                        className="font-ramadan text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-widest flex justify-center space-x-2"
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {['I', 'N', 'B', 'S'].map((letter, i) => (
                                            <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </motion.h1>
                                    <motion.p
                                        className="font-ramadan text-black text-lg md:text-2xl lg:text-3xl mb-8"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {slide.description}
                                    </motion.p>
                                    <motion.button
                                        className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link to="/services">{t('ExploreMore')}</Link>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RamadanHeroSection;

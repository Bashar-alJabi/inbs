import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);

    const { t } = useTranslation();

    // Auto-slide effect
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    //     }, 5000); // Change slide every 5 seconds

    //     return () => clearInterval(timer);
    // }, []);

    // Carousel data
    // const slides = [
    //     {
    //         image: '/Images/HeroImg2.jpg',
    //         description: t('HeroDescription1'),
    //     },
    //     {
    //         image: '/Images/HeroImg1.jpg',
    //         description: t('HeroDescription2'),
    //     },
    // ];

    const letterVariants = {
        hidden: { opacity: 0, y: 30},
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, type: "spring", stiffness: 120 }
        }),
    };

    return (
        <section className="relative overflow-hidden">
            {/* Carousel container */}
            <div className="relative h-[calc(100dvh-4rem)]">
                {/* {slides.map((slide, index) => ( */}
                    <div
                        // key={index}
                        // className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            {/* <img src={slide.image} alt={`Hero ${index + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" /> */}
                            <video className="absolute inset-0 w-full h-full object-cover" src="/Images/HeroV.mp4" autoPlay loop muted playsInline></video>
                            {/* Dark overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/15" />  */}
                            {/* <div className="absolute inset-0 bg-black/50"></div> */}
                        </div>

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
                                        className="font-lora text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-widest flex justify-center space-x-2"
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {['I', 'N', 'B', 'S'].map((letter, i) => (
                                            <motion.span 
                                                key={i} 
                                                custom={i} 
                                                variants={letterVariants}
                                                className="inline-block"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </motion.h1>
                                    <motion.p 
                                        className=" text-xl md:text-2xl lg:text-3xl mb-8 text-black font-bold"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {/* {slide.description} */}
                                        {t('HeroDescription1')}
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
                {/* ))} */}

                {/* Carousel Controls */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;

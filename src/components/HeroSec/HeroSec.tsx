import { motion } from 'framer-motion';

const HeroSec = ({ title }: { title: string}) => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative h-[40vh] w-full">
            <img src="/Images/HeroSec.jpg" alt="Hero Section" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl text-white font-bold"
                >
                    {title}
                </motion.h1>
            </div>
        </motion.section>
    );
};

export default HeroSec;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSec from '@/components/HeroSec/HeroSec';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import Lottie from 'lottie-react';
import AboutAnim from '../../Anim/AboutAnim.json';

const About = () => {
    useDocumentTitle('INBS | About Us');

    const { t } = useTranslation();

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <HeroSec title={t('AboutUs')} />

            {/* Info Section with Image */}
            <section className="container mx-auto pt-16 px-4 md:px-6 text-center md:text-left">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">{t('WhoWeAre')}</h2>
                        <h3 className="text-xl font-semibold">{t('WhoWeAreDescription1')}</h3>
                        <p className="text-foreground/70">{t('WhoWeAreDescription2')}</p>
                    </div>
                    <div className="order-first relative">
                        {/* Background decorative shape */}
                        <div
                            className="absolute -top-4 -left-4 w-full h-full bg-primary/20"
                            style={{ clipPath: 'polygon(0% 20%, 100% 0%, 80% 100%, 0% 80%)' }}
                        ></div>
                        {/* Main image container */}
                        <div className="relative">
                            <img src="/Images/AboutUsImg.jpg" alt="About Section" loading="lazy" decoding="async" className="rounded-lg w-full h-auto relative z-10" />
                            {/* Foreground decorative shape */}
                            <div
                                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10"
                                style={{ clipPath: 'polygon(20% 0%, 100% 20%, 100% 100%, 0% 80%)' }}
                            ></div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Lottie animationData={AboutAnim} className="w-72 mx-auto" />

            {/* Missions Section */}
            <section className="container mx-auto pb-16 px-6 md:px-10">
                <div className="space-y-12">
                    {/* Mission 1 */}
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row text-center md:text-left items-start gap-8"
                    >
                        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shrink-0 mx-auto md:mx-0 blending">
                            <span className="text-primary-foreground">{t('Mission')}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">{t('MissionTitle')}</h3>
                            <p className="text-foreground/70">{t('MissionDescription')}</p>
                        </div>
                    </motion.div>
                    {/* Mission 2 */}
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col md:flex-row text-center md:text-left items-start gap-8"
                    >
                        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shrink-0 mx-auto md:mx-0 blending">
                            <span className="text-primary-foreground">{t('Target')}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">{t('TargetTitle')}</h3>
                            <p className="text-foreground/70">{t('TargetDescription')}</p>
                        </div>
                    </motion.div>
                    {/* Mission 3 */}
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col md:flex-row text-center md:text-left items-start gap-8"
                    >
                        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shrink-0 mx-auto md:mx-0 blending">
                            <span className="text-primary-foreground">{t('Relationship')}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">{t('RelationshipTitle')}</h3>
                            <p className="text-foreground/70">{t('RelationshipDescription')}</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default About;

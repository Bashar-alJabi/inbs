import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import HeroSec from '@/components/HeroSec/HeroSec';
import Lottie from 'lottie-react';
import CareersAnim from '../../Anim/CareersAnim.json';

const Careers = () => {
    useDocumentTitle('INBS | Careers');

    const { t } = useTranslation();

    const phoneNumber1 = '+971508866555';
    // const phoneNumber2 = '+971506596665';
    const email = 'jalal.omar2025@gmail.com';

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <HeroSec title={t('Careers')} />

            <section className="container mx-auto py-16 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center"
                >
                    <div className="max-w-2xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl font-bold mb-6"
                        >
                            {t("CareerTitle")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg text-foreground/70"
                        >
                            {t('CareerDesc')}
                        </motion.p>
                        <Lottie animationData={CareersAnim} className="w-44 mx-auto" />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col gap-4 justify-center items-center"
                        >
                            <Button asChild className="bg-green-500 hover:bg-green-600 text-white w-fit">
                                <a href={`https://wa.me/${phoneNumber1}`} target="_blank" rel="noopener noreferrer">
                                    {t('CareerWA')} 
                                </a>
                            </Button>
                            {/* <Button asChild className="bg-green-500 hover:bg-green-600 text-white w-fit">
                                <a href={`https://wa.me/${phoneNumber2}`} target="_blank" rel="noopener noreferrer">
                                    {t('CareerWA')} +971 50 659 6665
                                </a>
                            </Button> */}
                            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white w-fit">
                                <a href={`mailto:${email}`}>{t('CareerEM')}</a>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default Careers;

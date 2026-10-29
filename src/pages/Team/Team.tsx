import { useTranslation } from 'react-i18next';
import HeroSec from '@/components/HeroSec/HeroSec';
import TeamSection from '@/pages/Home/TeamSection/TeamSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks/useDocTitle';

const Team = () => {
    useDocumentTitle('INBS | Team');

    const { t } = useTranslation();

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <HeroSec title={t('Team')} />
            {/* Team Section */}
            <TeamSection />
            {/* Contact Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-primary h-[40vh] flex items-center"
            >
                <div className="container mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <p className="text-3xl font-bold text-white/90">{t('ContactText')}</p>
                        <div className="flex justify-center md:justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Link to="/contact">
                                    {t('ContactNow')}
                                </Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Team;

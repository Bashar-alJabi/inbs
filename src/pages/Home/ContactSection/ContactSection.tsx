import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import ContactSecAnim from '../../../Anim/ContactSecAnim.json';

const ContactSection = () => {

    const { t } = useTranslation();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="container px-4 md:px-6 lg:px-8 mx-auto py-16 relative"
        >
            <Lottie animationData={ContactSecAnim} className="w-44 mx-auto absolute left-1/2 -translate-x-1/2 -top-10" />
            <div className='bg-primary py-16 px-4 rounded-lg text-center shadow-lg blending'>
                <h2 className="text-3xl md:text-4xl text-primary-foreground font-bold mb-4">{t('ContactTitle')}</h2>
                <p className="text-lg text-primary-foreground/90 mb-6">{t('ContactDesc')}</p>

                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-primary-foreground/90 transition-all"
                >
                    {t('ContactButton')}
                </Link>
            </div>
        </motion.section>
    );
};

export default ContactSection;
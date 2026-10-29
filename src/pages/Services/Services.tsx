import HeroSec from "@/components/HeroSec/HeroSec";
import ServicesSection from "@/pages/Home/ServicesSection/ServicesSection";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'
import { useDocumentTitle } from '@/hooks/useDocTitle';
import Lottie from 'lottie-react';
import ServicesAnim from '../../Anim/ServicesAnim.json';

const Services = () => {
  useDocumentTitle('INBS | Our Services', false);

  const { t } = useTranslation();

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSec title={t('Services')} />
      {/* Services Section */}
      <section className="container mx-auto pt-16 px-4 md:px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            {t("ServicesPageTitle")}
          </motion.h1>
          {/* <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 text-center mb-6"
          >
            {t("ServicesPageDescription1")}
          </motion.h2> */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/60 text-center max-w-3xl mx-auto"
          >
            {t("ServicesPageDescription2")}
          </motion.p>
          <Lottie animationData={ServicesAnim} className="w-60 mx-auto mb-16" />
        </motion.div>
      </section>
      <ServicesSection servicesSectionPageContent={false}/>
    </main>
  )
}

export default Services;
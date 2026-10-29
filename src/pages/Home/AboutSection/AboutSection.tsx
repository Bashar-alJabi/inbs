import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import AboutSecAnim from '../../../Anim/AboutSecAnim.json';

const AboutSection = () => {
    const { t } = useTranslation();

return (
    <section className="py-16 bg-background text-foreground text-center lg:text-left">
            <div className="container mx-auto px-4">
                {/* Title for mobile */}
                <div className="lg:hidden">
                    <h2 className="text-3xl font-bold text-foreground">{t("AboutUs")}</h2>
                    <h3 className="text-xl font-semibold text-muted-foreground mt-2">{t("AboutUsTitle")}</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <Lottie animationData={AboutSecAnim} className="w-96 mx-auto" />
                    {/* Image Column */}
                    {/* <motion.div 
                        className="relative w-full h-[300px] overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    > */}
                        {/* Background shapes */}
                        {/* <motion.div 
                            className="absolute top-8 left-8 w-64 h-64 bg-blue-200 rounded-full opacity-50 max-w-[80%]"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ></motion.div> */}
                        {/* Image container */}
                        {/* <motion.div 
                            className="relative w-4/5 h-4/5 mx-auto rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img 
                                src="/Images/AboutUsImg.jpg" 
                                alt="About Us" 
                                className="w-full h-full object-cover"
                                loading="lazy" decoding="async"
                            />
                            {/* Foreground shapes */}
                            {/* <motion.div 
                                className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-30"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.div>
                        </motion.div>
                    </motion.div> */}
                    {/* Text Column */}
                    <motion.div 
                        className="lg:space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        {/* Title for desktop */}
                        <motion.div 
                            className="hidden lg:block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.6
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-foreground">{t("AboutUs")}</h2>
                            <h3 className="text-xl font-semibold text-muted-foreground">{t("AboutUsTitle")}</h3>
                        </motion.div>
                        <motion.p 
                            className="text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.6
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            {t("AboutUsDescription")}
                        </motion.p>
                        <motion.button 
                            className="bg-primary text-white px-6 py-2 mt-6 lg:mt-0 rounded-lg hover:bg-primary/90 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.6,
                                    duration: 0.6
                                }
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/about">
                                {t("LearnMore")}
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
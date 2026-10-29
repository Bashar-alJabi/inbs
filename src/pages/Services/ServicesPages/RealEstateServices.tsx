import { Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const RealEstateServices = () => {

    const { t } = useTranslation();

    return (
        <main className="container mx-auto px-4 md:px-24 min-h-screen flex flex-col justify-center py-24">
            <div className="relative">
                {/* Back button */}
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center justify-between gap-10 w-fit">
                        <Link to="/services" className="text-foreground hover:text-foreground/80 mb-8">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        {/* Title section with icon */}
                        <motion.section 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center gap-3 mb-8"
                        >
                            <Home className="w-10 h-10" />
                            <h1 className="text-2xl md:text-4xl font-bold text-center">{t("RealEstateTitle")}</h1>
                        </motion.section>
                    </div>

                    <div className="flex flex-col gap-8 items-center w-full max-w-4xl mx-auto">
                        {/* Image section */}
                        <motion.section 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full flex justify-center"
                        >
                            <img 
                                src="/Images/servicesImg/service1.jpg" 
                                alt="Real Estate Services" 
                                loading="lazy" 
                                decoding="async" 
                                className="w-full max-w-xl rounded-lg shadow-lg" 
                            />
                        </motion.section>

                        {/* Description section */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="w-full"
                        >
                            <p className="text-lg text-foreground/80 leading-relaxed text-center md:text-left w-full">
                                • {t("RealEstateDescription1")}<br />
                                • {t("RealEstateDescription2")}<br />
                                • {t("RealEstateDescription3")}<br />
                                • {t("RealEstateDescription4")}
                            </p>
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RealEstateServices;

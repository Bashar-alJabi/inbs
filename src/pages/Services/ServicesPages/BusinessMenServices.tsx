import { ArrowLeft, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const BusinessMenServices = () => {

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
                            <Briefcase className="w-10 h-10" />
                            <h1 className="text-2xl md:text-4xl font-bold text-center">{t("BusinessMenTitle")}</h1>
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
                                src="/Images/servicesImg/service3.jpg" 
                                alt="Business Men Services" 
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
                                • {t("BusinessMenDescription1")}<br />
                                • {t("BusinessMenDescription2")}<br />
                                • {t("BusinessMenDescription3")}<br />
                                • {t("BusinessMenDescription4")}<br />
                                • {t("BusinessMenDescription5")}<br />
                                • {t("BusinessMenDescription6")}<br />
                                • {t("BusinessMenDescription7")}<br />
                                • {t("BusinessMenDescription8")}<br />
                                • {t("BusinessMenDescription9")}<br />
                                • {t("BusinessMenDescription10")}<br />
                                • {t("BusinessMenDescription11")}<br />
                                • {t("BusinessMenDescription12")}<br />
                                • {t("BusinessMenDescription13")}<br />
                                • {t("BusinessMenDescription14")}<br />
                                • {t("BusinessMenDescription15")}
                            </p>
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BusinessMenServices;

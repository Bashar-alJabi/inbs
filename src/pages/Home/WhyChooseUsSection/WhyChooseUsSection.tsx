import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, ShieldCheck, ThumbsUp, Users } from "lucide-react";

const WhyChooseUsSection = () => {
    const { t } = useTranslation();

    const reasons = [
        {
            id: 1,
            icon: <ShieldCheck size={40} className="text-primary" />,
            title: t("ReliableService"),
            description: t("ReliableServiceDesc"),
        },
        {
            id: 2,
            icon: <ThumbsUp size={40} className="text-primary" />,
            title: t("CustomerSatisfaction"),
            description: t("CustomerSatisfactionDesc"),
        },
        {
            id: 3,
            icon: <Users size={40} className="text-primary" />,
            title: t("ExpertTeam"),
            description: t("ExpertTeamDesc"),
        },
        {
            id: 4,
            icon: <CheckCircle size={40} className="text-primary" />,
            title: t("GuaranteedResults"),
            description: t("GuaranteedResultsDesc"),
        },
    ];

    return (
        <section className="pb-16 bg-background text-center">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">{t("WhyChooseUs")}</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t("WhyChooseUsDesc")}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-center mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                            <p className="text-muted-foreground mt-2">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;

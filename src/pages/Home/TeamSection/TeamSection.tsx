import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import teamMembers from './data.json';
import Lottie from 'lottie-react';
import TeamAnim from '../../../Anim/TeamAnim.json';

const TeamSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-background w-full overflow-x-hidden">
            <div className="container mx-auto px-4 md:px-6 w-full">
                {/* Section Header */}
                <motion.div 
                    className="text-center px-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('OurTeam')}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">{t('TeamDescription')}</p>
                </motion.div>

                <Lottie animationData={TeamAnim} className="w-52 mx-auto my-6" />

                {/* Team Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2">
                    {teamMembers.teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            className="bg-card rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="h-64 overflow-hidden">
                                <motion.img 
                                    src= {member.image} 
                                    alt={`Team Member ${member.id}`} 
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    loading="lazy" decoding="async"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
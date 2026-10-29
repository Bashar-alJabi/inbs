import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import servicesData from './data.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = ({ servicesSectionPageContent }: { servicesSectionPageContent: boolean }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language.substring(0, 2);
    const services = servicesData[currentLanguage as keyof typeof servicesData]?.services || [];

    if (!services.length) {
        return null;
    }

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
            {servicesSectionPageContent && 
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">{t('ServicesTitle')}</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('ServicesDescription')}</p>
                </motion.div>
            }
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Carousel className="w-full max-w-5xl mx-auto">
                        <CarouselContent>
                            {services.map((service, index) => (
                                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="relative group overflow-hidden">
                                            <div className="relative h-64 w-full">
                                                <motion.img 
                                                    src={service.src}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.4 }}
                                                    loading="lazy" decoding="async"
                                                />
                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                                                    <CardTitle className="text-xl text-white text-center px-4 line-clamp-2">{service.title}</CardTitle>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                                                <CardHeader className="text-white">
                                                    <CardTitle className="text-xl mb-2 line-clamp-2">{service.title}</CardTitle>
                                                    <CardDescription className="text-gray-200 line-clamp-3">{service.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="mt-auto">
                                                    <Link to={`/services/${service.url}`}>
                                                        <motion.div 
                                                            className="text-white flex items-center gap-2"
                                                            whileHover={{ x: 10 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {service.buttonText}
                                                            <span>→</span>
                                                        </motion.div>
                                                    </Link>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <motion.div 
                            className="flex justify-center gap-4 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <CarouselPrevious className="static translate-y-0 position-static" />
                            <CarouselNext className="static translate-y-0 position-static" />
                        </motion.div>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;

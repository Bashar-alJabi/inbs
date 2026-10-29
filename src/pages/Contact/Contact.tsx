import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSec from '@/components/HeroSec/HeroSec';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import Lottie from 'lottie-react';
import ContactAnim from '../../Anim/ContactAnim.json';

const Contact = () => {
    useDocumentTitle('INBS | Contact Us');

    const { t } = useTranslation();

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <HeroSec title={t('ContactUs')} />

            {/* Contact Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-lg overflow-hidden"
                    >
                        <div className="bg-gray-900">
                            <img
                                src="/Images/ContactCover.jpg"
                                alt="Contact"
                                className="absolute w-full h-full object-cover opacity-20"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="relative p-4 sm:p-8 text-white">
                                <Lottie animationData={ContactAnim} className="w-32 absolute bottom-0 right-0" />
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('ContactCoverInfo')}</h2>
                                <p className="mb-6 sm:mb-8">{t('ContactCoverDesc')}</p>
                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {t('Addresses')}
                                        </h3>
                                        <p>{t('Address')}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {t('Email')}
                                        </h3>
                                        <p>info@inbs-uae.com</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            {t('Phone')}
                                        </h3>
                                        <p>00971 50 886 6555</p>
                                        <p>042219222</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <div className="relative h-full min-h-[400px]">
                        <iframe
                            className="w-full h-full rounded-lg"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ParkLane%20Tower%20-%20Business%20Bay%20-%20Dubai+(Park%20Lane%20Tower)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Office Section */}
            <section className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/entrance.png"
                                alt="Entrance"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/door.png"
                                alt="Office Door"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/office.jpg"
                                alt="office"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;

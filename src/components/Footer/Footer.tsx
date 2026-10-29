import { Link } from 'react-router-dom';
import { Mail, Linkedin, Facebook, Instagram, ChevronRight, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const links = [
        { name: t('Home'), href: '/' },
        { name: t('About'), href: '/about' },
        { name: t('Services'), href: '/services' },
        { name: t('Team'), href: '/team' },
        { name: t('Contact'), href: '/contact' },
        { name: t('Careers'), href: '/careers' },
    ];
    const servicesSec1 = [
        { name: t('BusinessMenServices'), href: '/services/businessmen-services' },
        { name: t('RealEstateService'), href: '/services/real-estate-services' },
        { name: t('WebAndMobileAppDevelopment'), href: '/services/website-services' },
        { name: t('TourismServices'), href: '/services/tourism-services' },
        { name: t('FinancialServices'), href: '/services/financial-services' },
    ];
    const servicesSec2 = [
        { name: t('PrintingServices'), href: '/services/typing-services' },
        { name: t('Consultation'), href: '/services/consultation-services' },
        { name: t('CustomsServices'), href: '/services/customs-services' },
        { name: t('CargoServices'), href: '/services/cargo-services' },
        { name: t('CitizenshipAndImmigrationServices'), href: '/services/citizenship-and-immigration-services' },
    ];

    return (
        <footer className="bg-slate-950 text-white text-center md:text-left">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Column 1 - Logo & Social */}
                    <div className="space-y-4">
                        <img src="/Images/logo.png" alt="Company Logo" className="w-[12rem] mx-auto md:mx-0" />
                        <p className="text-gray-300 mt-4">{t('FooterAboutUs')}</p>
                        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                            <a href="tel:+971508866555" className="hover:text-[#5E8C61] transition-colors">
                                <Phone className="h-5 w-5" />
                            </a>
                            <a href="mailto:info@inbs-uae.com" className="hover:text-[#EA4335] transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/international-network-businessmen-services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0A66C2] transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100089453280961"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1877F2] transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/inbs_business/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E4405F] transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="text-gray-300 mt-4 space-y-2">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Globe className="h-5 w-5" />
                                <a
                                    href="https://inbsrealestate.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    inbsrealestate.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <MapPin className="h-5 w-5" />
                                <a
                                    href="https://www.google.com/maps?q=Park+Lane+Tower+-+Business+Bay+-+Dubai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    {t('Address')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="flex flex-col items-start mx-auto md:mx-0">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('QuickLinks')}
                        </h3>
                        <div className="flex flex-col items-center sm:items-start w-full max-w-[250px] sm:max-w-full">
                            <ul className="space-y-2 text-center sm:text-left w-full">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="w-fit text-gray-300 hover:text-white transition-colors transform hover:translate-x-2 flex items-center gap-2"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            <ChevronRight className="h-4 w-4 -ml-4" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 - Working Hours */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('WorkingHours')}
                        </h3>
                        <div className="text-gray-300 text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <p>{t('WH1')}</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Clock className="h-5 w-5" />
                                <p>
                                    {t('WH2')} {t('Closed')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4 - Our Services */}
                    <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('OurServices')}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full place-items-center sm:place-items-start">
                            {/* First Column of Services */}
                            <div className="flex flex-col items-center sm:items-start w-full max-w-[250px] sm:max-w-full">
                                <ul className="space-y-2 text-center sm:text-left w-full">
                                    {servicesSec1.map((service, index) => (
                                        <li key={index}>
                                            <Link
                                                to={service.href}
                                                className="w-fit text-gray-300 hover:text-white transition-colors transform hover:translate-x-2 flex items-center gap-2"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                                <ChevronRight className="h-4 w-4 -ml-4" />
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Second Column of Services */}
                            <div className="flex flex-col items-center sm:items-start w-full max-w-[250px] sm:max-w-full">
                                <ul className="space-y-2 text-center sm:text-left w-full">
                                    {servicesSec2.map((service, index) => (
                                        <li key={index}>
                                            <Link
                                                to={service.href}
                                                className="w-fit text-gray-300 hover:text-white transition-colors transform hover:translate-x-2 flex items-center gap-2"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                                <ChevronRight className="h-4 w-4 -ml-4" />
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        © {currentYear} {t('AllRightsReservedBy')} INBS.
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Link to="/privacy-policy" className="text-gray-400 hover:text-foreground-primary/80 transition-colors">
                            {t('PrivacyPolicy')}
                        </Link>
                        <span>|</span>
                        <Link to="/terms-conditions" className="text-foreground-primary/80 hover:text-foreground-primary transition-colors">
                            {t('Terms&Conditions')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

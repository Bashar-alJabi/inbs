import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import GoUpButton from './components/GoUpButton/GoUpButton';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BusinessMenServices from './pages/Services/ServicesPages/BusinessMenServices';
import CargoServices from './pages/Services/ServicesPages/CargoServicesServices';
import WebDevelopmentServices from './pages/Services/ServicesPages/WebDevelopmentServices';
import FinancialServices from './pages/Services/ServicesPages/FinancialServices';
import RealEstateServices from './pages/Services/ServicesPages/RealEstateServices';
import TourismServices from './pages/Services/ServicesPages/TourismServices';
import ConsultationServices from './pages/Services/ServicesPages/ConsultationServices';
import CustomsServices from './pages/Services/ServicesPages/CustomsServices';
import TypingServices from './pages/Services/ServicesPages/TypingServices';
import CitizenshipAndImmigrationServices from './pages/Services/ServicesPages/CzImServices';
import NotFound from './pages/NotFound/NotFound';
import Careers from './pages/Careers/Careers';
import TermsConditions from './pages/Legal/TermsConditions';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './components/Loading/Loading';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; // Show loader before content loads
    }

    return (
        <>
            <div className="hidden md:block">
                <CustomCursor />
            </div>
            <ScrollToTop />
            <GoUpButton />
            <div className="md:cursor-space flex flex-col min-h-screen justify-between">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/real-estate-services" element={<RealEstateServices />} />
                    <Route path="/services/website-services" element={<WebDevelopmentServices />} />
                    <Route path="/services/businessmen-services" element={<BusinessMenServices />} />
                    <Route path="/services/tourism-services" element={<TourismServices />} />
                    <Route path="/services/financial-services" element={<FinancialServices />} />
                    <Route path="/services/consultation-services" element={<ConsultationServices />} />
                    <Route path="/services/customs-services" element={<CustomsServices />} />
                    <Route path="/services/cargo-services" element={<CargoServices />} />
                    <Route path="/services/typing-services" element={<TypingServices />} />
                    <Route path="/services/citizenship-and-immigration-services" element={<CitizenshipAndImmigrationServices />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;

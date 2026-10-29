import { useDocumentTitle } from "@/hooks/useDocTitle";
import AboutSection from "@/pages/Home/AboutSection/AboutSection";
import ExperienceSection from "@/pages/Home/ExperienceSection/ExperienceSection";
import ServicesSection from "@/pages/Home/ServicesSection/ServicesSection";
import ContactSection from "./ContactSection/ContactSection";
import WhyChooseUsSection from "./WhyChooseUsSection/WhyChooseUsSection";
import HeroSection from "@/pages/Home/HeroSection/HeroSection";
// import RamadanHeroSection from "./HeroSection/RamadanHero";
// import TeamSection from "@/pages/Home/TeamSection/TeamSection";

const Home = () => {
    useDocumentTitle('INBS | Professional Business Solutions in Dubai & UAE');
    return (
        <main className="pt-16">
            <HeroSection />
            {/* <RamadanHeroSection /> */}
            <AboutSection />
            <ExperienceSection />
            <ServicesSection servicesSectionPageContent={true} />
            <WhyChooseUsSection />
            {/* <TeamSection /> */}
            <ContactSection />
        </main>
    );
};

export default Home;

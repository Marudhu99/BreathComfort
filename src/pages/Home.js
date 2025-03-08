import HomeHeroSection from "../components/HomeHeroSection";
import HomeWhyChooseUs from "../components/HomeWhyChooseUs";
import HomeServices from "../components/HomeServices";
import HomeServicesClientsCTA from "../components/HomeServicesClientsCTA";
import HomeAbout from "../components/HomeAbout";
import Header from "../components/Header";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <HomeHeroSection />

            {/* About Section */}
            <HomeAbout />

            {/* Why Choose Us Section */}
            <HomeWhyChooseUs />

            {/* Services Section */}
            <HomeServices />

            {/* Clients CTA Section */}
            <HomeServicesClientsCTA />
        </>

    );
}

export default Home;
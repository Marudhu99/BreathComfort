import ServiceHeroSection from "../components/ServiceHeroSection";
import PremiumServices from "../components/PremiumServices";
import SpecializedServices from "../components/SpecializedServices";
import Industries from "../components/Industries";
import HomeServicesClientsCTA from "../components/HomeServicesClientsCTA";

function Services() {
  return (
    <>
      {/* Renders the ServiceHeroSection component */}
      <ServiceHeroSection />
      {/* Renders the PremiumServices component */}
      <PremiumServices />
      {/* Renders the SpecializedServices component */}
      <SpecializedServices />
      {/* Renders the Industries component */}
      <Industries />
      {/* Renders the HomeServicesClientsCTA component */}
      <HomeServicesClientsCTA />
    </> 
  );
}

export default Services;
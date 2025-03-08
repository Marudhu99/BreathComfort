import ProductHeroSection from "../components/ProductHeroSection";
import Expertise from "../components/Expertise";
import VRFSystems from "../components/VRFSystems";
import ProductWhyChoose from "../components/ProductsWhyChoose";
import HomeServicesClientsCTA from "../components/HomeServicesClientsCTA";

function Product(){
    return(
        <>
            <ProductHeroSection/>
            <Expertise />
            <VRFSystems />
            <ProductWhyChoose/>
            <HomeServicesClientsCTA/>
        </>
    );
}

export default Product;
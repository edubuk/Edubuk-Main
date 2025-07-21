
import WhyCETASection from "./CETA";
import WhyESealSection from "./Eseal";
import WhyMIITSection from "./MIIT";
import CETAOlympiadSection from "./Olympiad";
import WhyEbukTokenSection from "./Tokens";
import WhyTruCVSection from "./Trucv";



const ProductSection = () => {
  return (
    <div className="flex justify-center flex-col">
      <WhyTruCVSection />
      <WhyESealSection />
      <WhyCETASection />
      <WhyEbukTokenSection />
<CETAOlympiadSection />
<WhyMIITSection />
</div>
  );
};

export default ProductSection;

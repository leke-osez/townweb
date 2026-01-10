// import {
//   claytonLogo,
//   coltsNeckLogo,
//   fortvilleLogo,
//   glenCloveLogo,
//   hagermanLogo,
// } from "@/assets/images";
import claytonLogo from "@/assets/images/clayton-logo.png";
import coltsNeckLogo from "@/assets/images/colts-neck-logo.png";
import fortvilleLogo from "@/assets/images/fortville-logo.png";
import hagermanLogo from "@/assets/images/hagerman.jpeg";
import glenCloveLogo from "@/assets/images/glen-cove-logo.png";
import { InfinityCarousel } from "../animations/inifinityCarousel";

const logos = [
  { id: 1, name: "Clayton", content: claytonLogo },
  { id: 2, name: "FortVille", content: fortvilleLogo },
  { id: 3, name: "Hagerman", content: hagermanLogo },
  { id: 4, name: "Colts Neck", content: coltsNeckLogo },
  { id: 5, name: "Glen Clove", content: glenCloveLogo },
];

const BrandLogoCarousel = () => {
  return (
    <div>
      <InfinityCarousel logoList={logos} type="image" />
    </div>
  );
};

export default BrandLogoCarousel;

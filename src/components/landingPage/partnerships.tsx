import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { InfinityCarousel } from "../animations/inifinityCarousel";
import BrandLogoCarousel from "./brandLogoCarousel";
import { useNavigate } from "@tanstack/react-router";
import { AppRoutes } from "@/appRoutes";

// const partnersLogos = [
//   {
//     alt: "",
//     src: "https://cdn.townweb.com/glencoveny.gov/wp-content/uploads/2020/11/Glen-Cove-Logo-1.png",
//     width: 50,
//     height: 50,
//   },
//   {
//     alt: "",
//     src: "https://cdn.townweb.com/glencoveny.gov/wp-content/uploads/2020/11/Glen-Cove-Logo-1.png",
//     width: 50,
//     height: 50,
//   },
//   {
//     alt: "",
//     src: "https://cdn.townweb.com/glencoveny.gov/wp-content/uploads/2020/11/Glen-Cove-Logo-1.png",
//     width: 50,
//     height: 50,
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 2000,
//   cssEase: "linear",
// };

const Partnership = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black flex flex-col items-center gap-4 w-full p-3 py-5 md:py-10 text-white min-h-[200px]">
      <p className="text-sm border-l-2 border-b-2 border-amber-400 p-2 pt-0 pb-1 rounded-lg font-semibold">
        Since 2007
      </p>
      <section className="w-full flex justify-center mt-8 opacity-80">
        <img
          src="https://assets-global.website-files.com/5fd9ec20a182fdcd717d73c6/615e19e10ad3a071a2feb414_ARPAwebsitebutton.png"
          alt="Town Web Services Qualify for American Rescue Plan (ARPA) Funding"
          className="h-18 max-w-120"
        ></img>
      </section>
      <p className="text-lg md:text-xl xl:text-2xl font-medium max-w-[700px] text-center my-5">
        <span>TownWeb®</span>{" "}
        <span>
          is a software company with experience designing local
          government websites, powering over 700 municipalities in 40
          states and counting!
        </span>{" "}
      </p>

      <p className="text-base max-w-[500px] text-center font-medium opacity-70 my-6">
        {
          "We’ll build and launch a municipal website that will make your Clerk website work much easier, and make your residents happy!"
        }
      </p>

      <div className="flex flex-col items-center w-full">
        <p className="text-white/80">Partnerships</p>

        <div className="overflow-x-hidden max-w-[800px] w-full">
          <BrandLogoCarousel />
        </div>
      </div>

      <Button
        className="bg-[#2c2c2c] text-white flex items-center gap-2 "
        onClick={() => {
          navigate({ to: AppRoutes.about });
        }}
      >
        <div className="w-2 aspect-square rounded-full bg-green-400"></div>
        <p>About Us</p>
      </Button>
    </div>
  );
};

export default Partnership;

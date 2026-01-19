import { Button } from "../ui/button";
import telephone3D from "@/assets/images/telephone3D.png";
import { useContext } from "react";
import { ModalContext } from "@/hooks/providers/modalProvider";

const GetStarted = () => {
  const { open: openQuoteModal } = useContext(ModalContext);
  // const navigate = useNavigate();

  return (
    <div className="bg-linear-to-b   from-blue-800 to-purple-950 w-full py-8 md:py-10 px-4 md:px-8 text-white flex flex-col gap-5 md:gap-8 mt-16 mb-16 md:mb-24 md:mt-50 overflow-x-clip ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-6">
        <p className="text-2xl md:text-4xl xl:text-6xl font-semibold md:max-w-[40%]">
          Get Started with{" "}
          <span className="text-red-300">Town Web</span>
        </p>
        <section className="relative w-full h-fit">
          <div className="md:absolute top-0 right-0 flex-1 max-w-[900px] -rotate-25 md:-translate-y-[20%]  -mt-28">
            <img
              src={telephone3D}
              className="w-full h-full object-contain z-10"
            />
          </div>
        </section>
      </div>

      <Button
        className="bg-white text-black w-fit text-lg font-semibold px-6 py-4 h-auto hover:opacity-90"
        onClick={() => {
          openQuoteModal();
        }}
      >
        Request a Quote
      </Button>
    </div>
  );
};

export default GetStarted;

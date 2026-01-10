import ButterflyIcon from "@/assets/comps/butterflyIcon";
import ImageAnimate from "../animations/imageAnimate";
import FlowerIcon from "@/assets/comps/flowerIcon";

const Collage = () => {
  return (
    <div className="relative min-h-[200px] w-full flex flex-col gap-8 md:gap-10 items-center py-9 md:py-20 px-2 bg-[#e7fcee] overflow-x-hidden">
      <ButterflyIcon className="opacity-8 absolute top-[50%] left-0 w-30 text-blue-800 md:w-60 rotate-20 -translate-x-[9%]" />
      <FlowerIcon className="opacity-8 absolute top-[10%] right-0 w-30 text-blue-800 md:w-80 rotate-20 translate-x-[9%]" />

      <section className="w-full flex flex-col gap-3 md:gap-6 items-center text-center">
        <p className="font-medium text-3xl md:text-4xl max-w-[700px]">
          We build your website using government approved best
          practices
        </p>

        <p className="max-w-[800px] text-xl font-light">
          {`A better designed site will be easier for your residents to
          use. Residents can find the information they’re looking for
          more quickly. All new sites are built to be ADA 508
          compliant and mobile friendly.`}
        </p>
      </section>
      <section className="relative flex flex-col sm:flex-row h-fit w-full max-w-[800px] ">
        <div className="flex flex-col h-full w-full">
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
            containerClass="flex-[0.5] aspect-square"
          />
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/holland.jpeg"
            containerClass="flex-1 "
          />
        </div>
        <ImageAnimate
          src="https://storage.googleapis.com/juniper-media-library/92/2024/04/ozark.jpeg"
          containerClass="h-[70%] aspect-square absolute top-[15%] left-[50%] right-[50%] -translate-x-[50%] hidden sm:flex z-2 border-[#e7fcee] md:border-10"
        />
        <div className="flex flex-col h-full w-full ">
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/hillsdale.jpg"
            containerClass="flex-1 aspect-square"
          />

          <ImageAnimate
            src="https://assets-global.website-files.com/5fe05694048e93075951d702/605dfdda0cf8364be7a82e72_cropped-Tami-Collin-5-8.jpg"
            containerClass="flex-[0.5]"
          />
        </div>
      </section>

      {/* <section className="flex md:gap-3 gap-1 h-fit w-full max-w-[800px] bg-inherit">
        <div className="flex flex-col gap-3 h-full w-full bg-inherit">
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
            containerClass="flex-[0.6]  "
          />
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
            containerClass="flex-1 aspect-square"
          />
        </div>
        <div className="flex flex-col gap-3 h-full w-full -ml-[50%]">
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
            containerClass="flex-[0.5]"
          />
          <div className="flex gap-3 flex-[0.5]">
            <ImageAnimate
              src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
              containerClass="h-full"
            />
            <ImageAnimate
              src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
              containerClass="h-full"
            />
          </div>
          <ImageAnimate
            src="https://storage.googleapis.com/juniper-media-library/92/2024/04/spider.jpeg"
            containerClass="flex-[0.5]"
          />
        </div>
      </section> */}
    </div>
  );
};

export default Collage;

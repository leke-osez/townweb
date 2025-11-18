import { cn } from "@/utils/style";
import { Button } from "../ui/button";
import ShakeIcon from "../animations/notification";
import Floating from "../animations/floating";
import ScrabbleText from "../ui/scrabbleText";

const Banner = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="px-8 md:px-12 xl:px-20 flex gap-4 md:gap-10 justify-between h-fit">
        <section className="flex flex-col gap-5 w-fit text-3xl md:text-6xl font-normal whitespace-nowrap mt-4 md:mt-16 text-gray-700">
          <p className="">HI THERE!</p>
          <p>WE ARE TOWN WEB</p>
          <div className={"flex gap-2"}>
            <p>WE BUILD</p>
            <ScrabbleText
              text="web"
              className="text-red-800/80 font-medium"
            />
          </div>
          <p>MUNICIPAL WEBSITES</p>
        </section>
        <section className="flex-1 h-[300px] max-w-[9500px]">
          <div className="relative h-[200px]">
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/elements-top.png"
              alt=""
            />
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/house-cloud.png"
              alt=""
            />
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/houses-letter.png"
              alt=""
            />
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/building.png"
              alt=""
            />
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/elements-bottom.png"
              alt=""
            />
            <img
              className="absolute "
              src="https://townweb.com/assets/images/hero/letter-cloud.png"
              alt=""
            />

            <Floating duration={8}>
              <img
                className="absolute imgeMan"
                src="https://townweb.com/assets/images/hero/man.png"
                alt=""
              />
            </Floating>

            <Floating>
              <img
                className="absolute "
                src="https://townweb.com/assets/images/hero/woman.png"
                alt=""
              />
            </Floating>
          </div>
        </section>
      </div>
      <section className="w-full flex-1 relative flex items-center gap-3 md:gap-5 justify-center mt-6 md:mt-8 xl:mt-16">
        <Button
          className={cn(
            "text-lg md:text-xl xl:text-2xl font-medium px-4 md:px-10 md:py-3 py-2 h-fit bg-gray-900 shadow-md rounded-none rounded-es-3xl"
          )}
        >
          Request a Quote
        </Button>

        <ShakeIcon>
          <Button
            className={cn(
              "text-lg md:text-xl xl:text-2xl font-medium px-4 md:px-10 md:py-3 py-2 h-fit bg-amber-600 hover:bg-amber-600/70 shadow-md rounded-none rounded-ee-3xl"
            )}
          >
            Book a Demo
          </Button>
        </ShakeIcon>
      </section>
    </div>
  );
};

export default Banner;

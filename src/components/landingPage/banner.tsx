import { cn } from "@/utils/style";
import { Button } from "../ui/button";
import ShakeIcon from "../animations/notification";
import Floating from "../animations/floating";
import { useContext, useState } from "react";
import { ScrabbleTextReveal } from "../animations/scrambleText";
import { bookMeeting, rangeIncrement } from "@/utils/helper";
import { ModalContext } from "@/hooks/providers/modalProvider";

// import SunIcon from "@/assets/comps/sunIcon";
const words = [
  "AFFORDABLE",
  "ADA COMPLIANT",
  "UP-TO-DATE",
  "ELEGANT",
];

const Banner = () => {
  const [position, setPosition] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const { open: openQuoteModal } = useContext(ModalContext);

  const changeWord = () => {
    // const newWord = words[Math.floor(Math.random() * words.length)];
    setPosition(rangeIncrement(position, 0, words.length - 1));
    setTrigger(!trigger); // Toggles the trigger to re-run the animation
  };

  return (
    <div className="relative w-full h-screen flex flex-col ">
      <div className="px-8 md:px-12 xl:px-20 flex flex-col items-center md:flex-row gap-4 md:gap-10 justify-between h-fit">
        <section className="relative z-2  flex flex-col text-center md:text-left gap-5 w-full md:w-fit md:max-w-[50%] text-3xl md:text-5xl xl:text-6xl md:font-normal xl:whitespace-nowrap mt-4 md:mt-16 text-gray-800 font-medium">
          <div className="flex md:flex-col gap-3 w-full justify-center md:justify-start">
            <p className="">
              HI THERE!{" "}
              <span className="flex sm:hidden">WE ARE TOWN WEB</span>
            </p>
            <p className="hidden sm:flex">WE ARE TOWN WEB</p>
          </div>

          <p className={" w-full justify-center md:justify-start"}>
            <span className="mr-2">WE BUILD</span>
            <ScrabbleTextReveal
              targetWord={words[position]}
              trigger={trigger}
              onComplete={changeWord}
              textClass="font-medium "
            />
          </p>
          <p>MUNICIPAL WEBSITES</p>
        </section>
        <section className="md:absolute md:right-8 md:w-[50%] flex-1 h-[300px] w-full max-w-[9500px]">
          <div className="relative h-full">
            {/* <SunIcon className="opacity-10 absolute top-[3%] left-0 w-30 text-blue-800 md:w-80 rotate-20  -translate-y-[15%] -translate-x-[20%]" /> */}

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
      <section className="px-3 w-full flex-1 relative flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-5 justify-center mt-6 md:mt-8 xl:mt-16">
        <Button
          className={cn(
            "w-full sm:w-fit max-w-[300px] text-lg md:text-xl xl:text-2xl font-medium px-4 md:px-10 md:py-3 py-2 h-fit bg-gray-900 hover:bg-gray-700 shadow-md rounded-none rounded-ee-[20%] rounded-es-[20%]",
          )}
          onClick={() => {
            openQuoteModal();
          }}
        >
          Request a Quote
        </Button>

        <ShakeIcon className="w-full sm:w-fit max-w-[300px]">
          <Button
            className={cn(
              "w-full text-lg md:text-xl xl:text-2xl font-medium px-4 md:px-10 md:py-3 py-2 h-fit bg-amber-600 hover:bg-amber-500 shadow-md rounded-none rounded-ee-[20%] rounded-es-[20%]",
            )}
            onClick={() => {
              bookMeeting();
            }}
          >
            Book a Demo
          </Button>
        </ShakeIcon>
      </section>
    </div>
  );
};

export default Banner;

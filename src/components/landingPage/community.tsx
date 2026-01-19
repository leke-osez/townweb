import LeafIcon from "@/assets/comps/leafIcon";
import USRegionMap from "../animations/map";
import HeartIcon from "@/assets/comps/heartIcon";
import BuildingIcon from "@/assets/comps/buildingIcon";
import { useEffect, useState } from "react";
import BurgerIcon from "@/assets/comps/burgerIcon";

const REGION_COLORS: Record<string, string> = {
  West: "#60a5fa",
  Midwest: "#34d399",
  South: "#fbbf24",
  Northeast: "#a78bfa",
};

const regionList = Object.keys(REGION_COLORS);

const Community = () => {
  const [colorState, setColorState] = useState<string | null>("West");
  const [isPaused, setIsPaused] = useState(false);

  const handleColorChange = (
    region: string | null,
    // setRegion: (region: string | null) => void,
  ) => {
    if (region) {
      setColorState(region);
      // setRegion(region);
    }
  };

  const pauseAnimation = () => {
    setIsPaused(true);
  };

  const resumeAnimation = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("first");
      const currentIndex = regionList.findIndex(
        (rgn) => rgn === colorState,
      );
      setColorState(
        regionList[(currentIndex + 1) % regionList.length],
      );
    }, 3000);

    if (isPaused) {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [colorState, isPaused]);

  return (
    <div className="relative py-20 flex flex-col gap-4 items-center w-full overflow-x-hidden">
      <LeafIcon
        style={{
          color: colorState ? REGION_COLORS[colorState] : undefined,
        }}
        className="opacity-15 absolute top-[3%] right-0 w-30  md:w-80 rotate-20  -translate-y-[15%] translate-x-[20%]"
      />
      <HeartIcon
        style={{
          color: colorState ? REGION_COLORS[colorState] : undefined,
        }}
        className="opacity-15 absolute top-[3%] left-0 w-30  md:w-80 rotate-20  -translate-y-[15%] -translate-x-[20%]"
      />
      <BuildingIcon
        style={{
          color: colorState ? REGION_COLORS[colorState] : undefined,
        }}
        className="opacity-15 absolute bottom-[0%] left-0 w-30  md:w-80 rotate-20  -translate-y-[50%] -translate-x-[20%]"
      />
      <BurgerIcon
        style={{
          color: colorState ? REGION_COLORS[colorState] : undefined,
        }}
        className="opacity-18 absolute bottom-[0%] right-0 w-30  md:w-80 rotate-20  -translate-y-[50%] translate-x-[20%]"
      />

      <p className="text-3xl md:text-4xl font-medium text-center">
        Be part of our wonderful community of municipalities all over
        the US
      </p>
      <div className="w-full max-w-[800px]">
        <USRegionMap
          handleColorChange={handleColorChange}
          regionColors={REGION_COLORS}
          pauseAnimation={pauseAnimation}
          region={colorState}
          resumeAnimation={resumeAnimation}
        />
      </div>
    </div>
  );
};

export default Community;

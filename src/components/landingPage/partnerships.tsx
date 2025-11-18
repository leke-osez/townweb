import { Button } from "../ui/button";

const Partnership = () => {
  return (
    <div className="bg-black flex flex-col items-center gap-4 w-full p-3 text-white min-h-[200px]">
      <p className="text-sm border-l-2 border-b-2 border-amber-400 p-2 pt-0 pb-1 rounded-lg font-semibold">
        Since 2010
      </p>
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
          "Transforming visions into brands that stand out, inspire, and excel in a crowded digital-first world"
        }
      </p>
      <Button className="bg-[#2c2c2c] text-white flex items-center gap-2">
        <div className="w-2 aspect-square rounded-full bg-green-400"></div>
        <p>About Us</p>
      </Button>
    </div>
  );
};

export default Partnership;

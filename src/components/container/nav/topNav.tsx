import { Button } from "@/components/ui/button";
import { cn } from "@/utils/style";

const navList = [
  { id: "features", name: "Features" },
  { id: "services", name: "Services" },
  { id: "resources", name: "Resources" },
  { id: "meet-the-team", name: "Meet The Team" },
  { id: "request-quote", name: "Request Quote" },
  { id: "support", name: "Support" },
];

const TopNav = () => {
  return (
    <nav className=" flex justify-between items-center py-4 md:m-6 mt-0 md:mt-0 sticky top-0 px-3 z-10 ">
      <img
        src="https://storage.googleapis.com/juniper-media-library/92/2024/04/townweb-logo.png"
        alt="Town Web Logo"
        decoding="async"
        className="h-8"
      ></img>
      <section
        className="hidden md:flex gap-4 text-lg items-center py-2 px-3 bg-black/10 rounded-full backdrop-blur-md 
"
      >
        {navList.map((navItem) => (
          <Button
            variant={"plain"}
            className={cn(
              `w-fit px-1 text-sm sm:text-base mix-blend-difference`
            )}
            key={navItem.id}
          >
            {navItem?.name}
          </Button>
        ))}
      </section>

      <Button className="hidden xl:flex bg-black text-white items-center gap-2 shadow-md">
        <div className="w-2 aspect-square rounded-full bg-green-400"></div>
        <p>GET IN TOUCH</p>
      </Button>

      <Button className="flex md:hidden"></Button>
    </nav>
  );
};

export default TopNav;

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
    <nav className=" flex justify-between items-center py-4 md:m-6 mt-0 md:mt-0 sticky top-0 px-3 z-10 bg-background">
      <img
        src="https://storage.googleapis.com/juniper-media-library/92/2024/04/townweb-logo.png"
        alt="Town Web Logo"
        decoding="async"
        className="h-8"
      ></img>
      <section className="flex gap-4 text-lg items-center ">
        {navList.map((navItem) => (
          <Button
            variant={"plain"}
            className={cn(`w-fit px-1 text-base `)}
            key={navItem.id}
          >
            {navItem?.name}
          </Button>
        ))}
      </section>

      <Button className="bg-black text-white flex items-center gap-2">
        <div className="w-2 aspect-square rounded-full bg-green-400"></div>
        <p>GET IN TOUCH</p>
      </Button>
    </nav>
  );
};

export default TopNav;

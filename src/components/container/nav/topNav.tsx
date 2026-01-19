import MenuIcon from "@/assets/comps/menuIcon";
import ShareIcon from "@/assets/comps/shareIcon";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/hooks/providers/modalProvider";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import useMenuNav, { dropDownList } from "@/hooks/useMenuNav";
import { cn } from "@/utils/style";
import { useNavigate } from "@tanstack/react-router";
import { useContext, useRef, useState } from "react";

const navList = [
  { id: "features", name: "Features" },
  { id: "services", name: "Services" },
  { id: "resources", name: "Resources" },
  { id: "about", name: "About Us" },
  { id: "request-quote", name: "Request Quote" },
  { id: "support", name: "Support" },
];

const contractedNavList = [
  {
    id: "company",
    name: "Company",
    items: [
      { id: "meet-the-team", name: "Meet The Team" },
      { id: "services", name: "Services" },
    ],
  },
  { id: "contact", name: "Contact" },
  { id: "request-quote", name: "Request Quote" },
  { id: "support", name: "Support" },
];

type Props = {
  handleMenu: () => void;
  className?: string;
};

const TopNav = ({ className, handleMenu }: Props) => {
  const [dropDownMenuState, setDropDownMenuState] = useState<
    string | null
  >(null);
  const navigate = useNavigate();
  const { open: openQuoteModal } = useContext(ModalContext);

  const { handleMenuClick } = useMenuNav({
    setDropDownMenuState,
    options: { "request-quote": openQuoteModal },
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  if (modalRef) {
    useClickOutside(modalRef, () => setDropDownMenuState(null));
  }
  const visible = useHideOnScroll({ showAfter: 80 });
  // const { pathname } = useLocation();

  const bookMeeting = () => {
    window.open(
      "https://appt.link/town-web/demo",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <nav
      className={cn(
        " flex gap-3 justify-between items-center py-4  mt-0 md:mt-0 sticky top-0 px-3 z-10 0 bg-black/10 rounded-md md:rounded-none backdrop-blur-md ",
        className,
        visible
          ? "translate-y-0 transition-transform duration-300"
          : "-translate-y-full transition-transform duration-300",
        // pathname === "/" ? "md:bg-gray-300" : "md:bg-transparent"
      )}
    >
      <Button
        variant={"plain"}
        className="p-0 m-0 h-auto"
        onClick={() => navigate({ to: "/" })}
      >
        <img
          src="https://storage.googleapis.com/juniper-media-library/92/2024/04/townweb-logo.png"
          alt="Town Web Logo"
          decoding="async"
          className="h-8"
        ></img>
      </Button>

      <section className="md:flex hidden text-sm md:text-base">
        <div
          className="hidden md:flex gap-2 xl:gap-4 text-lg items-center py-2 px-3 bg-black/10 rounded-xl backdrop-blur-md 
"
        >
          {navList.map((navItem) => (
            <div className="relative h-fit" key={navItem.id}>
              <Button
                variant={"plain"}
                className={cn(
                  `w-fit px-1 text-sm sm:text-base mix-blend-difference`,
                )}
                key={navItem.id}
                onClick={() => {
                  handleMenuClick(navItem.id);
                }}
              >
                {navItem?.name}
              </Button>
              {dropDownMenuState &&
                navItem.id === dropDownMenuState &&
                dropDownList[
                  dropDownMenuState as keyof typeof dropDownList
                ] && (
                  <div
                    className="flex gap-2 absolute top-[130%] w-screen max-w-[800px] text-base "
                    ref={modalRef}
                  >
                    <ColumnMenu
                      menuList={dropDownList[dropDownMenuState]}
                    />
                  </div>
                )}
            </div>
          ))}
        </div>
      </section>

      <section className="hidden xl:hidden">
        <div
          className="hidden md:flex gap-4 text-lg items-center py-2 px-3 bg-black/10 rounded-full backdrop-blur-md 
"
        >
          {contractedNavList.map((navItem) => (
            <div>
              <Button
                variant={"plain"}
                className={cn(
                  `w-fit px-1 text-xs sm:text-base mix-blend-difference`,
                )}
                key={navItem.id}
                onClick={() => {
                  handleMenuClick(navItem.id);
                }}
              >
                {navItem?.name}
              </Button>
              {dropDownMenuState &&
                navItem.id === dropDownMenuState &&
                dropDownList[
                  dropDownMenuState as keyof typeof dropDownList
                ] && (
                  <div className="grid grid-cols-2" ref={modalRef}>
                    {dropDownList[dropDownMenuState].map((item) => (
                      <p key={item.id}>{item.name}</p>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      </section>

      <div className="hidden sm:flex xl:hidden">
        {/* evenly distribute items */}
      </div>

      <Button
        className="hidden xl:flex bg-black text-white items-center gap-2 shadow-md"
        onClick={() => {
          bookMeeting();
        }}
      >
        <div className="w-2 aspect-square rounded-full bg-green-400"></div>
        <p className="hidden md:flex">GET IN TOUCH</p>
        <ShareIcon className="flex md:hidden" />
      </Button>

      <Button
        className="flex md:hidden"
        variant={"plain"}
        onClick={handleMenu}
      >
        <MenuIcon />
      </Button>
    </nav>
  );
};

const ColumnMenu = ({
  menuList,
}: {
  menuList: { id: string; name: string }[];
}) => {
  return (
    <div className="flex gap-3 bg-gray-100 p-3 font-medium rounded-b-lg text-blue-900">
      <div className="flex flex-col gap-3">
        {menuList
          .filter((_, id) => id % 2 === 0)
          .map((item) => (
            <Button
              key={item.id}
              className="border-gray-400/90 text-black/85"
              variant={"outline"}
            >
              {item.name}
            </Button>
          ))}
      </div>

      <div className="flex flex-col gap-3">
        {menuList
          .filter((_, id) => id % 2 !== 0)
          .map((item) => (
            <Button
              key={item.id}
              variant={"outline"}
              className="border-gray-400/90 text-black/85"
            >
              {item.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default TopNav;

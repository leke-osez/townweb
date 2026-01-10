import { Disclosure } from "@headlessui/react";
// import NavLinkButton from "../nav_bar/NavLinkButton";
import TextWithIcon from "@/components/ui/textAndIcon";
import { Button } from "@/components/ui/button";
import ArrowDown from "@/assets/comps/arrowDown";
import MenuCard from "@/components/ui/menuCard";
import { AppRoutes } from "@/appRoutes";
import CloseIcon from "@/assets/comps/closeIcon";

type DropDownMenuPropType = {
  // isOpen: boolean;
  //   navLinks: NavLinksPropsType[];
  // handleNav: (link: string) => void;
  // currentPath: string;
  handleClose: () => void;
};

const DropDownMenu = ({
  // isOpen,
  // navLinks,
  // handleNav,
  // currentPath,
  handleClose,
}: DropDownMenuPropType) => {
  return (
    <div
      className={`md:hidden  fixed top-0 h-screen z-100 bg-white flex flex-col gap-2 md:gap-1 items-start overflow-y-auto scroll-m-0 md:overflow-none
         w-full  md:w-fit  md:bg-light_nav_bg/[19%] 
        `}
    >
      <div className=" w-full sticky top-0 flex justify-end bg-light_bg z-floater">
        <Button
          onClick={handleClose}
          variant={"plain"}
          className="p-0 w-10 h-10"
        >
          <CloseIcon />
        </Button>
      </div>

      {/* MENU CONTENTS */}
      <section className="w-full flex flex-col gap-3 p-3">
        {/* RESOURCES */}
        <Disclosure defaultOpen as="div">
          {({ open }: { open: boolean }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Our Resources"}
                  comp={<ArrowDown />}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">
                  Explore our Services and Resources
                </h1>
                <div className="flex flex-col justify-start items-start gap-2">
                  <MenuCard
                    link={AppRoutes.blog}
                    title="Blogs and Articles"
                    description="Read our latest articles to keep you informed."
                    // Icon={TutorIcon}
                    handleClose={handleClose}
                  />
                  <MenuCard
                    link={AppRoutes.resources}
                    title="Resources"
                    description="Access our resources to guide you in making a decision to work with us."
                    // Icon={ExamIcon}
                    handleClose={handleClose}
                  />
                  <MenuCard
                    link={AppRoutes.services}
                    title="Services"
                    description="Explore our range of services to find the right fit for you."
                    // Icon={StatIcon}
                    handleClose={handleClose}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* COMPANY */}
        <Disclosure defaultOpen as="div" className="mt-2">
          {({ open }: { open: boolean }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Our Company"}
                  comp={<ArrowDown />}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">
                  Have a peek into our company.
                </h1>
                <div className="flex flex-col justify-start items-start gap-2">
                  <MenuCard
                    link={""}
                    title="Meet the team"
                    description="See the amazing people behind townweb."
                    // Icon={DashboardIcon}
                    handleClose={handleClose}
                  />
                  {/* <MenuCard
                    link={AppRoutes.settings.index}
                    title="Setting"
                    description="Personalize the feel and experience."
                    Icon={SettingsIcon}
                    handleClose={handleClose}
                  /> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* SUPPORT */}
        <Disclosure defaultOpen as="div" className="mt-2">
          {({ open }: { open: boolean }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <TextWithIcon
                  text={"Support"}
                  comp={<ArrowDown />}
                  width={4}
                  height={4}
                  imageClassName={
                    open
                      ? "-rotate-180 transform transition-all"
                      : "transform transition-all"
                  }
                  flexPositions="justify-between items-center"
                  buttonClassName="w-full"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                <h1 className="font-medium text-lg">
                  We love to help
                </h1>
                <div className="flex flex-col justify-start items-start gap-2">
                  <MenuCard
                    link={""}
                    title="Get in touch"
                    description="How can we assist you today?"
                    // Icon={SettingsIcon}
                    handleClose={handleClose}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* {navLinks()?.map(({ name, alias, link, Icon }) => {
          const isActive = currentPath === link;
          return (
            <NavLinkButton
              link={link}
              isActive={isActive}
              key={name}
              handleNav={handleNav}
              Icon={Icon}
              title={name}
              alias={alias}
            />
          );
        })} */}

        {/* <section className="w-full flex flex-col justify-center items-center px-6 mt-6">
          <Link
            to={AppRoutes.pricing.index}
            className="flex justify-center items-center border-[1.6px] text-sm border-light_font p-2 font-semibold w-[90%]"
          >
            View Pricing
          </Link>
        </section> */}
      </section>
    </div>
  );
};

export default DropDownMenu;

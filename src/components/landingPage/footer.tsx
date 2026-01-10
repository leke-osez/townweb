import Logo from "@/assets/comps/logo";
import { Button } from "../ui/button";
import FacebookIcon from "@/assets/comps/facebook";
import InstaIcon from "@/assets/comps/insta";
import TwitterIcon from "@/assets/comps/twitterIcon";
// import townWebLogo from "@/assets/images/townweb-logo-real.png";

const Footer = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-8 md:gap-10 xl:gap-16 p-5 h-fit min-h-[100px] text-white  md:p-7 xl:p-10 xl:pt-20 bg-linear-to-b  from-zinc-950 to-black">
      <div className="flex flex-col items-center gap-5">
        <p className="opacity-90 text-sm md:text-base text-center font-medium text-blue-200">
          BUILD A MUNICIPAL WEBSITE YOUR COMMUNITY WOULD BE PROUD OF
        </p>
        <Button className="flex items-center gap-2 text-xl md:text-2xl bg-white text-black rounded-full h-auto p-5 px-8">
          <div className="w-2 aspect-square rounded-full bg-green-400"></div>
          <p>Let's work together</p>
        </Button>
      </div>

      <section className="flex flex-col items-center md:items-start gap-10 md:gap-28 md:flex-row md:justify-start w-full">
        <div>
          <Logo textClass={"text-lg md:text-xl text-white/70"} />
          <p className="max-w-[500px] text-lg md:text-xl">
            Town Web is a digital-first municipal web agency
            specializing in building, managing, and scaling modern
            online experiences for local governments and public
            organizations.
          </p>
          <p className="mt-4 text-sm opacity-70">
            Town Web Design, LLC 1360 Regent Street #355 Madison, WI
            53715
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex-1 flex gap-4 justify-around w-full flex-wrap">
            <LinkList
              category="Company"
              itemList={[
                { name: "Website Design", link: "#" },
                { name: "Website Hosting", link: "#" },
                { name: "Website Management", link: "#" },
                { name: "Custom Development", link: "#" },
              ]}
            />

            <LinkList
              category="Services"
              itemList={[
                { name: "Website Design", link: "#" },
                { name: "Website Hosting", link: "#" },
                { name: "Website Management", link: "#" },
                { name: "Custom Development", link: "#" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2 opacity-70 w-full justify-center mt-8">
            <Button className="px-1" variant={"plain"}>
              <FacebookIcon />
            </Button>
            <Button className="px-1" variant={"plain"}>
              <InstaIcon />
            </Button>
            <Button className="px-1" variant={"plain"}>
              <TwitterIcon />
            </Button>
          </div>
        </div>
      </section>

      <section>
        <p className="opacity-60 text-sm">
          © 2007 - {`${new Date().getFullYear()}`} Town Web Design
        </p>
      </section>

      <div className="h-fit  w-full flex justify-center items-end text-white text-5xl md:text-8xl xl:text-[10rem8] font-semibold">
        <p className="opacity-80">
          townweb<span className="text-lg relative">&reg;</span>
        </p>
      </div>
    </div>
  );
};

type Props = {
  category: string;
  itemList: Array<{ link: string; name: string }>;
};

const LinkList = ({ category, itemList }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-start">
      <p className="opacity-80 capitalize">
        {category.toUpperCase()}
      </p>

      <div className="flex flex-col gap-1 text-base md:text-lg">
        {itemList.map((item) => (
          <Button
            key={item.name}
            className="gap-1 text-start p-0 flex justify-start md:text-lg font-light"
          >
            {item?.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import logo from "@/assets/images/townweb-logo-real.png";
import { cn } from "@/utils/style";

type Props = {
  textClass?: string;
};

const Logo = ({ textClass }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="tw" className="h-20" />
      <p className={cn("text-gray-800 relative", textClass)}>
        <span className="font-semibold">TOWN</span> WEB{" "}
        <span className="text-sm relative top-0">&reg;</span>
      </p>
    </div>
  );
};

export default Logo;

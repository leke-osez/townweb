import { cn } from "@/utils/style";

type Props = {
  src: string;
  className?: string;
  containerClass?: string;
};

const ImageAnimate = ({ src, className, containerClass }: Props) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden group hover:md:border-10 rounded-3xl border-[#e7fcee] border-4 md:border-5 hover:z-4 transition-transform duration-300 bg-gray-300",
        containerClass
      )}
    >
      <div className="bg-gray-400 group-hover:hidden hgroup-hover-backdrop-none absolute w-full h-full animate-pulse"></div>
      <img
        src={src}
        className={cn(
          "object-cover group-hover:scale-120 w-full h-full transition-transform duration-300 absolute top-0 left-0",
          className
        )}
      />
    </div>
  );
};

export default ImageAnimate;

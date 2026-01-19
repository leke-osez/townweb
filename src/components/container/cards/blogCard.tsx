import { Button } from "@/components/ui/button";

type BlogCardProps = {
  title: string;
  imageURL: string;
  desc: string;
  handleClick?: (id: string) => void;
  id: string;
};

const BlogCard = ({
  title,
  imageURL,
  desc,
  handleClick,
  id,
}: BlogCardProps) => {
  return (
    <Button
      variant={"plain"}
      className="w-full h-auto flex flex-col gap-2 items-center max-w-[400px] p-0 group"
      onClick={() => {
        handleClick && handleClick(id);
      }}
    >
      <img
        src={imageURL}
        alt="title"
        className=" w-full rounded-t-xl"
      />
      <section className="flex flex-col gap-2">
        <p className="w-full text-lg font-medium line-clamp-2">
          {title}
        </p>
        <p className="text-gray-800 md:text-base line-clamp-2 text-start">
          {desc}
        </p>
      </section>

      <div className="border border-gray-400/90  px-3 w-full py-2 group-hover:bg-black group-hover:text-white">
        <p>Read more</p>
      </div>
    </Button>
  );
};

export default BlogCard;

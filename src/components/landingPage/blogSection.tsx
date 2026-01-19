import StylishArrow from "@/assets/comps/stylishArrow";
import { Button } from "../ui/button";
import BlogCard from "../container/cards/blogCard";
import { useNavigate } from "@tanstack/react-router";
import { AppRoutes } from "@/appRoutes";
import { blogsSnippets } from "@/data/general";

const BlogSection = () => {
  const navigate = useNavigate();
  const handleNavId = () => {
    navigate({ to: `/${AppRoutes.blog}` });
  };
  return (
    <div className="relative flex w-full flex-col gap-4 md:gap-8 items-center py-3 md:py-10 px-3">
      <Button
        variant={"plain"}
        className="h-auto flex gap-2 items-center"
        onClick={() => {
          navigate({ to: `/${AppRoutes.blog}/all` });
        }}
      >
        <p className="text-xl md:text-3xl font-medium">
          Explore Our Articles
        </p>
        <div className="rotate-90 h-6 w-7  p-1 ">
          <StylishArrow />
        </div>
      </Button>

      <div className="w-full grid justify-items-center grid-cols-2 gap-3 justify-center  md:grid-cols-3">
        {blogsSnippets.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            imageURL={blog.imageURL}
            desc={blog.desc}
            id={blog.slug}
            handleClick={handleNavId}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

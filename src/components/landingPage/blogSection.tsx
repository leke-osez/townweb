import StylishArrow from "@/assets/comps/stylishArrow";
import { Button } from "../ui/button";
import BlogCard from "../container/cards/blogCard";
import { useNavigate } from "@tanstack/react-router";
import { AppRoutes } from "@/appRoutes";

const blogsSnippets = [
  {
    title: "How to make your website ADA compliant",
    slug: "make-your-website-ada-compliant",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2025/04/TW%20blog%20header%20(1)-1.png",
    desc: "Learn the essential steps to ensure your municipal website meets ADA compliance standards and is accessible to all users.",
  },
  {
    title: "Simple Solutions for Municipal Rentals",
    slug: "solution-for-municipal-rentals",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2024/11/TW%20blog%20header%20(1).png",
    desc: "As part of our ever-growing ways to help make Clerk-work easier: Town Web now boasts a digital transformation strategy that simplifies municipal rentals.",
  },
  {
    title:
      "Why Every Municipality Needs Board Management Software (Yes, Even Yours)",
    slug: "why-you-need-board-management-software",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2025/07/TW%20blog%20header.png",
    desc: "The Need for Digital Transformation When it comes to local government, there’s one thing every",
  },
];

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

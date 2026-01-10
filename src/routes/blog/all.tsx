import BlogCard from "@/components/container/cards/blogCard";
import Pagination from "@/components/ui/pagination";
import SearchBar from "@/components/ui/searchBar";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";

export const Route = createFileRoute("/blog/all")({
  component: RouteComponent,
});

const blogsSnippets = [
  {
    title: "How to make your website ADA compliant",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2025/04/TW%20blog%20header%20(1)-1.png",
    desc: "Learn the essential steps to ensure your municipal website meets ADA compliance standards and is accessible to all users.",
  },
  {
    title: "Simple Solutions for Municipal Rentals",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2024/11/TW%20blog%20header%20(1).png",
    desc: "As part of our ever-growing ways to help make Clerk-work easier: Town Web now boasts a digital transformation strategy that simplifies municipal rentals.",
  },
  {
    title:
      "Why Every Municipality Needs Board Management Software (Yes, Even Yours)",
    imageURL:
      "https://storage.googleapis.com/juniper-media-library/92/2025/07/TW%20blog%20header.png",
    desc: "The Need for Digital Transformation When it comes to local government, there’s one thing every",
  },
];

function RouteComponent() {
  const navigate = useNavigate();
  const { page } = useSearch({ from: "/blog/all" }) as {
    page?: number;
  };
  const handleSubmitSearch = () => {
    // Implement search functionality
  };

  const handleNavPage = (num: number) => {
    console.log(num);
    navigate({ to: "/blog/all", search: { page: num } });
  };
  return (
    <div className="w-full flex flex-col items-center gap-10 py-10 px-3">
      <div className="w-full max-w-[700px]">
        <SearchBar
          placeholder="Search for blogs and resources..."
          handleSubmit={handleSubmitSearch}
        />
      </div>

      <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-9 px-3">
        {/* Example blog cards */}
        {blogsSnippets.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            imageURL={blog.imageURL}
            desc={blog.desc}
            handleClick={() =>
              navigate({ to: `/blog/${blog.title}` })
            }
          />
        ))}
      </section>

      <section>
        <Pagination
          pageSize={3}
          navigateToPage={handleNavPage}
          activePage={page ?? 1}
        />
      </section>
    </div>
  );
}

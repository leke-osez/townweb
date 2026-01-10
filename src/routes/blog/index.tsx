import { OptImg } from "@/components/animations/optImg";
// import BlogCard from "@/components/container/cards/blogCard";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import whyUseDashboardImg from "@/assets/images/why-use-dashboard.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/")({
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
  return (
    <div className="w-full flex flex-col items-center gap-10 p-4 md:p-10">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 md:gap-20">
        <section className="w-full flex flex-col lg:flex-row  gap-4 md:gap-8">
          <div className="relative lg:max-w-[40%] xl:max-w-[800px] aspect-video h-fit">
            <OptImg
              alt={blogsSnippets[0].title}
              sources={[
                {
                  src: whyUseDashboardImg,
                  width: 800,
                },
              ]}
              className="h-full rounded-lg xl:rounded-lg"
            />
            <div className="font-semibold text-white absolute w-full p-3 xl:p-9 bg-black/30 max-h-[50%] backdrop-blur-sm bottom-0 rounded-b-lg xl:rounded-b-lg">
              <p className="max-w-[500px] text-xl xl:text-2xl">
                {`Why Every Municipality Needs Board Management Software
            (Yes, Even Yours)`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 ">
            <h2 className="text-base font-medium opacity-70">
              Other featured posts
            </h2>
            <div className="grid grid-rows-3 gap-3 md:gap-4 flex-1">
              {blogsSnippets.map((blog) => (
                <div
                  key={blog.title}
                  className="flex gap-2 items-start"
                >
                  <div className="h-[100px] w-[150px]">
                    <OptImg
                      alt={blog.title}
                      sources={[
                        {
                          src: blog.imageURL,
                          width: 0,
                        },
                      ]}
                      className="h-[100px] w-[150px] rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base line-clamp-2 font-semibold max-w-[400px]">
                      {blog.title}
                    </h3>
                    {/* <p className="text-xs opacity-70">{blog.desc}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <p className="text-gray-700 font-medium text-lg">
            Recent Posts
          </p>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 xl:gap-12 w-full max-w-[1300px]">
              {blogsSnippets.map((blog) => (
                <div key={blog.title} className="flex flex-col gap-2">
                  <OptImg
                    alt={blog.title}
                    sources={[
                      {
                        src: blog.imageURL,
                        width: 0,
                      },
                    ]}
                    className="rounded-md"
                  />
                  <p className="text-lg font-medium md:font-semibold md:text-xl">
                    {blog.title}
                  </p>
                  <p className="line-clamp-2 opacity-80">
                    {blog.desc}
                  </p>
                  <p className="text-sm text-gray-600 self-end">
                    3 min read
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Button
              onClick={() => navigate({ to: "/blog/all" })}
              variant={"outline"}
            >
              VIEW ALL POSTS
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

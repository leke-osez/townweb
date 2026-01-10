import { OptImg } from "@/components/animations/optImg";
import { createFileRoute } from "@tanstack/react-router";
import whyUseDashboardImg from "@/assets/images/why-use-dashboard.jpg";

export const Route = createFileRoute("/blog/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[700px]">
        <OptImg
          alt={"banner"}
          sources={[
            {
              src: whyUseDashboardImg,
              width: 0,
            },
          ]}
          className="w-full rounded-xl aspect-video"
        />
      </div>
    </div>
  );
}

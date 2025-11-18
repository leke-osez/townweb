import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing-page/_landingPage")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen">
      <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-gray-500 text-sm ">
        SCROLL TO EXPLORE
      </p>
    </div>
  );
}

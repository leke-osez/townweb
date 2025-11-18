import TopNav from "@/components/container/nav/topNav";
import Banner from "@/components/landingPage/banner";
import Partnership from "@/components/landingPage/partnerships";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[2000px] w-full">
        <div className="bg-background">
          <TopNav />
          <Banner />
        </div>

        {/* <section className="w-full flex justify-center mt-8">
          <img
            src="https://assets-global.website-files.com/5fd9ec20a182fdcd717d73c6/615e19e10ad3a071a2feb414_ARPAwebsitebutton.png"
            alt="Town Web Services Qualify for American Rescue Plan (ARPA) Funding"
            className="w-full max-w-120"
          ></img>
        </section> */}
        <Partnership />
        <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-gray-500 text-sm ">
          SCROLL TO EXPLORE
        </p>
      </div>
    </div>
  );
}

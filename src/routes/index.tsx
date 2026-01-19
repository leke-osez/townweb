// import MapChart from "@/components/animations/map";
import {
  ScrollReveal,
  SlideOverSection,
} from "@/components/animations/verticalSlide";
import Banner from "@/components/landingPage/banner";
import BlogSection from "@/components/landingPage/blogSection";
import Collage from "@/components/landingPage/collage";
import Community from "@/components/landingPage/community";
import GetStarted from "@/components/landingPage/getStarted";
import MeetTheTeam from "@/components/landingPage/meetTheTeam";
import Partnership from "@/components/landingPage/partnerships";
import SlideSection from "@/components/landingPage/slideSection";
import Testimonial from "@/components/landingPage/testimonial";
import { servicesList } from "@/data/landingPage";
import { cn } from "@/utils/style";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full flex justify-center bg-white p-0 m-0 mix-blend-difference">
      <div className="max-w-[2000px] w-full flex flex-col items-center">
        <div className="bg-linear-to-r from-[#56CCF2]/80 to-[#2F80ED]/80 w-full">
          {/* <TopNav /> */}
          <Banner />
        </div>

        <Partnership />
        <div className="w-full flex flex-col items-center bg-[#e5e7eb]/50 px-3">
          <Community />
        </div>

        <div className="relative">
          {servicesList.map((service, i) => (
            <SlideOverSection
              index={0}
              totalSections={4}
              key={i}
              className={"bg-white "}
            >
              <div className={cn(i % 2 === 0 && "bg-blue-200/20")}>
                <ScrollReveal delay={1}>
                  <SlideSection
                    index={i}
                    title={service.title}
                    services={service.services}
                    description={service.description}
                    img={service.img}
                    buttonProps={service.buttonProps}
                  />
                </ScrollReveal>
              </div>
            </SlideOverSection>
          ))}
        </div>
        <Collage />
        <MeetTheTeam />
        <Testimonial />
        <BlogSection />

        <GetStarted />
        {/* <DropDownMenu handleClose={() => {}} /> */}

        {/* <Footer /> */}

        <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-gray-700 text-base mix-blend-difference">
          SCROLL TO EXPLORE
        </p>
      </div>
    </div>
  );
}

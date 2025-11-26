import {
  ScrollReveal,
  SlideOverSection,
} from "@/components/animations/verticalSlide";
import TopNav from "@/components/container/nav/topNav";
import Banner from "@/components/landingPage/banner";
import Partnership from "@/components/landingPage/partnerships";
import SlideSection from "@/components/landingPage/slideSection";
import { servicesList } from "@/data/landingPage";
import { cn } from "@/utils/style";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-[2000px] w-full flex flex-col ">
        <div className="bg-background">
          <TopNav />
          <Banner />
        </div>

        <Partnership />
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

        <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-gray-500 text-sm ">
          SCROLL TO EXPLORE
        </p>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import DepartmentTabs from "./_containers/_departmentTabs";
import { useEffect, useState } from "react";
import { Department, employeesData } from "@/data/general";
import TeamCard from "./_containers/_teamCard";
import type { EmployeesData } from "@/types";
import CloseIcon from "@/assets/comps/closeIcon";
import { Button } from "@/components/ui/button";
import happyTown from "@/assets/images/happyTown.jpeg";
import business from "@/assets/images/Business.jpeg";
import business2 from "@/assets/images/Business2.jpeg";
import office from "@/assets/images/office.jpeg";
import { OptImg } from "@/components/animations/optImg";
import { CheckCheckIcon } from "lucide-react";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

const services = [
  "ADA 508 Compliance",
  "Dotgov Registration",
  "Facility Booking Software",
  "Local Government CMS",
  "Municipal Payment Solutions",
  "Private Email for Municipalities",
  "Emergency Mass Notification System",
  "Local Business Directory Software",
];

function RouteComponent() {
  const [activeTabId, setActiveTabId] = useState<Department | string>(
    Department.MANAGEMENT,
  );
  const [employeeData, setEmployeeData] = useState<EmployeesData>([]);
  const handleTab = (id: Department | string) => {
    setActiveTabId(id);
  };

  useEffect(() => {
    setEmployeeData([
      ...employeesData.filter(
        (emp) => emp.dept?.findIndex((d) => d === activeTabId) !== -1,
      ),
    ]);
  }, [activeTabId]);
  return (
    <div className="w-full flex flex-col items-center py-8 bg-amber-100/60 px-4">
      <div className="w-full max-w-[1000px] flex flex-col gap-6 items-center">
        <section className="flex flex-col gap-4 w-full">
          <div className="relative ">
            <div className="bg-black/30 z-2 absolute inset-0 rounded-xl"></div>
            <OptImg
              alt="Happy Town"
              sources={[
                {
                  src: happyTown,
                  width: 1000,
                },
              ]}
              className="w-full aspect-[3] object-cover rounded-xl"
            />

            <p className="text-5xl sm:text-8xl xl:text-8xl mix-blend-difference font-semibold absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] text-white z-3 whitespace-nowrap">
              ABOUT US
            </p>
          </div>
          <div className="text-center mt-10 flex flex-col items-center w-full ">
            <div className="w-px h-20 bg-amber-950/60"></div>
            <p className="text-lg xl:text-2xl my-4 opacity-80 font-light text-black">
              {`We are dedicated to providing top-notch services to our
              clients.`.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <aside className="flex-1 aspect-square flex gap-3">
              <OptImg
                sources={[
                  {
                    src: business,
                    width: 200,
                  },
                ]}
                className="flex-1 rounded-lg"
              />
              <div className="flex flex-col gap-3 flex-1">
                <OptImg
                  sources={[
                    {
                      src: business2,
                      width: 200,
                    },
                  ]}
                  className="rounded-lg"
                />
                <div className="rounded-lg text-2xl flex-1 flex flex-col gap-3 p-2 items-center font-semibold justify-center bg-amber-950 text-white">
                  <p>15+</p>
                  <p className="text-base md:text-lg text-center">
                    Years of Experience
                  </p>
                </div>
              </div>
            </aside>
            <aside className="flex-1 flex flex-col gap-4 p-3 md:p-4 rounded-md bg-white/90">
              <p className="text-sm text-gray-800">ABOUT TOWNWEB</p>
              <p className="text-xl font-medium capitalize">
                Building digital solutions for municipalities
              </p>
              <p className="text-gray-800">
                Our comprehensive platform empowers local governments
                to deliver modern, citizen-friendly services through a
                secure, intuitive online portal. Residents can easily
                submit permit applications, pay utilities, report
                issues, and access real-time information, while
                officials gain powerful dashboards for monitoring
                infrastructure, managing requests, and making
                data-driven decisions.
              </p>
              <div className="w-full flex flex-col items-center gap-2">
                <p className="text-black/70 font-light">SERVICES</p>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-1 w-full">
                  {services.map((service) => (
                    <div className="text-sm flex gap-1 items-start">
                      <CheckCheckIcon className="stroke-1 text-gray-600" />
                      <p className="font-medium">{service}</p>
                    </div>
                  ))}
                </section>
                <div className="w-full flex justify-center">
                  <Button className="mt-4 w-full max-w-[300px] font-medium">
                    Learn More
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-3 aspect-[3] mt-8">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 flex flex-col gap-3 p-3 bg-white/90 rounded-lg border border-gray-100/30">
              <p className="font-medium text-lg text-gray-700">
                OUR HISTORY
              </p>
              <p className="md:text-base text-black/80 text-sm">
                Founded in 2007, TownWeb® is a dedicated software
                company specializing in local government websites.
                Today we proudly power over 700 municipalities across
                40 states and continue to grow, delivering reliable
                digital experiences to communities nationwide.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3 p-3 bg-white/90 rounded-lg">
              <p className="font-medium text-lg text-gray-700">
                OUR VISION
              </p>
              <p className="md:text-base text-black/80 text-sm">
                To become the leading platform that transforms every
                local government into a connected, efficient, and
                truly citizen-centered smart community.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3 p-3 bg-white/90 rounded-lg">
              <p className="font-medium text-lg text-gray-700">
                OUR MISSION
              </p>
              <p className="md:text-base text-black/80 text-sm">
                To empower municipalities with intuitive, secure, and
                modern digital solutions that streamline services,
                enhance transparency, and improve the daily lives of
                residents and officials alike.
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-black/70 absolute z-2 inset-0 rounded-xl text-white p-3 md:p-5">
              <p className="text-2xl sm:text-3xl  font-medium capitalize text-right">
                Our goal is to Transform your municipality into a
                smart, efficient, and transparent administration.
              </p>
              <p className="text-base md:text-lg font-medium text-white/90 mt-5 text-right">
                We intend to bring the ideas you have for your
                municipality to life through digital solutions.
              </p>
            </div>
            <OptImg
              alt="office"
              sources={[
                {
                  src: office,
                  width: 1000,
                },
              ]}
              className="w-full flex-1 object-cover rounded-xl max-h-[500px]"
            />
          </div>
        </section>
        <div className="w-px h-20 md:h-36 bg-amber-950/60 my-6"></div>

        <section className="text-center">
          <p className="text-3xl xl:text-6xl font-medium text-gray-600">
            MEET OUR AMAZING{" "}
            <span className="text-amber-950/80 font-semibold">
              TEAM
            </span>
          </p>
          <p className="text-lg xl:text-2xl my-4 opacity-80 text-gray-800">
            We have a diverse group of individuals who are experts in
            their fields.
          </p>
        </section>
        <main className="flex flex-col gap-4 w-full">
          <section className="w-full flex justify-center">
            <DepartmentTabs
              activeTabId={activeTabId}
              handleTab={handleTab}
            />
          </section>
          <section className="mt-7 w-full">
            {employeeData?.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-4 w-full">
                {employeeData.map((emp) => (
                  <TeamCard
                    name={emp.name}
                    designation={activeTabId}
                    imgUrl={emp.imgUrl}
                  />
                ))}
              </div>
            ) : (
              <div className=" w-full flex justify-center gap-3 items-center">
                <CloseIcon className="text-red-500 w-16 h-16" />
                <p className="text-xl md:text-2xl font-medium text-gray-600/80">
                  Sorry!, No Employee in this department
                </p>
              </div>
            )}
          </section>

          <section className="w-full flex flex-col items-center">
            <Button className="h-auto py-3 px-7 md:px-20 md:py-4 text-xl md:text-2xl">
              Hire Us
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}

import StylishArrow from "@/assets/comps/stylishArrow";
import { Button } from "../ui/button";
import { AppRoutes } from "@/appRoutes";
import { useNavigate } from "@tanstack/react-router";
import { Department } from "@/data/general";
import { cn } from "@/utils/style";

const teamMembers = [
  {
    name: "Dustin",
    id: "dustin",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/dustin-card.png",
    dept: [Department.MANAGEMENT],
    quote: "",
    twStyle: "",
  },
  {
    name: "Cristina",
    id: "cristina",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/cristina-card.png",
    dept: [Department.MANAGEMENT, Department.OPERATIONS],
    quote: "",
    twStyle: "bg-blue-200/50",
  },
  {
    name: "Ivan",
    id: "Ivan",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/ivan-card.png",
    dept: [Department.MANAGEMENT, Department.PRODUCT],
    quote: "",
    twStyle: "bg-yellow-200/50",
  },
  {
    name: "Jerrica",
    id: "Jerrica",
    imgUrl:
      "https://storage.googleapis.com/juniper-media-library/92/2025/02/jerrica-card.png",
    dept: [Department.MANAGEMENT],
    quote: "",
    twStyle: "bg-orange-200/50",
  },
  //   {
  //     name: "Doe",
  //     designation: "Designer",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1670852077053-6f9a8b3b0d75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVtcGxveWVlfGVufDB8fDB8fHww",
  //   },
];

const MeetTheTeam = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center gap-6 p-3 py-10 xl:px-10">
      <div className="w-full text-xl xl:text-2xl">
        <p className="text-gray-700 sm:text-gray-500">Our Team</p>
      </div>
      <section className="w-full grid grid-cols-1 sm:grid-cols-3 items-end gap-3 md:gap-6 md:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            designation={Department.MANAGEMENT}
            imgUrl={member.imgUrl}
            className={member.twStyle}
          />
        ))}
      </section>
      <Button
        className="bg-[#2c2c2c] text-white flex items-center gap-2 group hover:p-2 h-auto p-3 py-2 scale-100 hover:scale-120"
        onClick={() => {
          navigate({ to: `/${AppRoutes.about}/#team` });
        }}
      >
        <div className="w-2 flex items-center justify-center aspect-square scale-100 rounded-full  bg-green-400 group-hover:scale-300 group-hover:mx-2 group-hover:p-1 transition-transform text-black ">
          <div className="hidden group-hover:flex w-full h-full transform transition-all group-hover:rotate-25  ">
            <StylishArrow className="w-full h-full " />
          </div>
        </div>
        <p>Meet The Team</p>
      </Button>
    </div>
  );
};

type TeamCardProps = {
  name: string;
  designation: Department;
  imgUrl: string;
  className?: string;
};
const TeamCard = ({
  name,
  designation,
  imgUrl,
  className,
}: TeamCardProps) => {
  return (
    <div className="bg-gray-300/10 border h-fit border-gray-500/10 rounded-xl p-2 sm:p-3 flex flex-col gap-3 group  ">
      <div
        className={cn(
          "bg-gray-400/40 rounded-xl overflow-hidden",
          className,
        )}
      >
        <img
          src={imgUrl}
          alt={name}
          className="w-full aspect-square rounded-xl object-contain  transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="text-sm text-gray-600">
          {designation.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default MeetTheTeam;

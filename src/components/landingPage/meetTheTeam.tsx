import StylishArrow from "@/assets/comps/stylishArrow";
import { Button } from "../ui/button";
import { AppRoutes } from "@/appRoutes";
import { useNavigate } from "@tanstack/react-router";

const teamMembers = [
  {
    name: "Jakkub",
    designation: "CEO",
    imgUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnBvcmF0ZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "John",
    designation: "CTO",
    imgUrl:
      "https://images.unsplash.com/photo-1670851604042-c56a9f5d179f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlfGVufDB8fDB8fHww",
  },
  {
    name: "Alex",
    designation: "Content",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683121067971-bf3efce082b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVtcGxveWVlfGVufDB8fDB8fHww",
  },
  {
    name: "Doe",
    designation: "Designer",
    imgUrl:
      "https://i.pinimg.com/736x/8b/6e/e6/8b6ee616233b7cd727d0c198641ab5cb.jpg",
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
            designation={member.designation}
            imgUrl={member.imgUrl}
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
  designation: string;
  imgUrl: string;
};
const TeamCard = ({ name, designation, imgUrl }: TeamCardProps) => {
  return (
    <div className="bg-gray-300/10 border h-fit border-gray-500/10 rounded-xl p-2 sm:p-3 flex flex-col gap-3 group  ">
      <div className="bg-gray-400/40 rounded-xl overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className="w-full aspect-square rounded-xl object-contain  transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

export default MeetTheTeam;

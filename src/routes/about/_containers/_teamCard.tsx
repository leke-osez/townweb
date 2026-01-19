import type { Department } from "@/data/general";

type TeamCardProps = {
  name: string;
  designation: Department | string;
  imgUrl: string;
};
const TeamCard = ({ name, designation, imgUrl }: TeamCardProps) => {
  return (
    <div className="bg-white border h-fit border-gray-500/10 rounded-xl p-2 sm:p-3 flex flex-col gap-3 group  ">
      <div className="bg-gray-400/40 rounded-xl overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className="w-full aspect-square rounded-xl object-contain  transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 ">
          {`${designation?.toUpperCase()} DEPARTMENT`}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;

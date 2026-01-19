import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

type MenuCard = {
  title: string;
  description: string;
  Icon?: ({ color }: { color: string }) => ReactNode;
  link: string;
  handleClose: () => void;
};

const MenuCard = ({
  title,
  description,
  Icon,
  link,
  handleClose,
}: MenuCard) => {
  const navigate = useNavigate();

  const handleNavigateMenu = () => {
    if (link.includes("http")) {
      // Handle empty link case
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate({ to: link });
    }
    handleClose();
  };
  return (
    <button
      className="flex gap-2 items-start justify-center"
      onClick={handleNavigateMenu}
    >
      <div
        className={`flex items-center justify-center w-7 p-1 bg-purple-100 rounded-md aspect-auto ${title} mt-2`}
      >
        {Icon && <Icon color={"#1DA1F2"} />}
      </div>
      <div className="flex flex-col flex-1  text-gray-900 font-medium items-start text-start">
        <p className="text-start text-base font-medium">{title}</p>
        <p className="font-normal text-sm text-light_font">
          {description}
        </p>
      </div>
    </button>
  );
};

export default MenuCard;

import { cn } from "@/utils/style";
import type { ReactNode } from "react";

type TextWithIconPropType = {
  text: string;
  image?: string;
  sizeType?: "px" | "rem" | "em";
  width: string | number;
  height: string | number;
  onClick?: () => void;
  flexPositions?: string;
  imageClassName?: string;
  buttonClassName?: string;
  textClass?: string;
  comp?: ReactNode;
};

const TextWithIcon = ({
  text,
  image,
  onClick,
  flexPositions,
  imageClassName,
  buttonClassName,
  textClass,
  comp,
}: TextWithIconPropType) => {
  // SIZE CONVERTER

  return (
    <div
      className={cn(
        `cursor-pointer flex gap-1 md:text-base text-sm ${
          flexPositions
            ? flexPositions
            : "items-center justify-center"
        }`,
        buttonClassName
      )}
      onClick={onClick}
    >
      <p className={cn(`text-black/80`, textClass)}>
        {text?.toUpperCase()}
      </p>
      <div className={cn(` `)}>
        {image && (
          <img
            src={image}
            className={cn(`w-full h-full`, imageClassName)}
          />
        )}

        {comp && comp}
      </div>
    </div>
  );
};

export default TextWithIcon;

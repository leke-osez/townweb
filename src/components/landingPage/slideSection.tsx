import FeatherPenIcon from "@/assets/comps/featherPenIcon";
import { Button } from "../ui/button";

type Props = {
  index: number;
  title: string;
  services: Array<string>;
  description: string;
  img: { src: string; alt: string };
  buttonProps: { text: string; action: () => void };
};

const SlideSection = ({
  index,
  title,
  services,
  description,
  img,
  buttonProps,
}: Props) => {
  return (
    <div className="px-3 md:p-16 ">
      {index < 1 && (
        <p className="text-gray-500 md:text-xl">SERVICES</p>
      )}
      <section className="grid md:grid-cols-[auto_40%_1fr] grid-cols-1 gap-6 mt-10 items-start justify-start">
        <div className="md:pr-8 md:mt-4">
          <p className="text-gray-700/50 md:font-semibold text-2xl">{`00${index + 1}`}</p>
        </div>
        <div className="flex flex-col gap-8 md:gap-10">
          <p className="xl:text-6xl font-medium text-3xl">{title}</p>

          <div className="flex flex-col gap-4 md:gap-6">
            {services.map((service, i) => (
              <div className="flex gap-3 sm:gap-4 items-start">
                <FeatherPenIcon className="text-gray-500/50" />
                <p
                  key={i}
                  className="font-normal opacity-80 text-lg md:text-xl -mt-2"
                >
                  {service}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant={"outline"}
            onClick={buttonProps.action}
            className="text-lg bg-black text-white sm:bg-transparent sm:text-black sm:border-gray-400 sm:hover:text-white sm:hover:bg-black/90"
          >
            {buttonProps.text}
          </Button>
        </div>

        <div>
          <p className="text-lg font-medium">{description}</p>
          <img src={img?.src} alt={img.alt} />
        </div>
      </section>
    </div>
  );
};

export default SlideSection;

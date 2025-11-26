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
    <div className="p-6 md:p-16">
      {index < 1 && <p className="text-gray-700">SERVICES</p>}
      <section className="grid md:grid-cols-[auto_40%_1fr] grid-cols-1 gap-6 mt-10 items-start justify-start">
        <div className="md:pr-8 md:mt-4">
          <p className="text-gray-700/50 font-semibold text-2xl">{`00${index + 1}`}</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="xl:text-6xl font-medium text-3xl">{title}</p>

          <div>
            {services.map((service, i) => (
              <p key={i} className="font-medium md:text-lg">
                {service}
              </p>
            ))}
          </div>

          <Button
            variant={"outline"}
            onClick={buttonProps.action}
            className="text-lg"
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

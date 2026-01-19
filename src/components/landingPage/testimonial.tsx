import { testimonialsData } from "@/data/general";
import { OptImg } from "../animations/optImg";

const Testimonial = () => {
  return (
    <div className="w-full flex flex-col gap-6 xl:flex-row justify-center my-6 bg-blue-100/10 py-10">
      <div className="w-fit px-4 md:px-10 xl:px-16 flex flex-col gap-6 ">
        <p className="text-gray-800">THOUSANDS TRUST TOWN WEB</p>

        <div className="flex flex-col gap-1 text-2xl md:text-3xl font-medium">
          <h2>{"Don't take our word for it,"}</h2>
          <h2>{"see what our clients say."}</h2>
        </div>

        <p className="opacity-80 font-normal w-full max-w-[600px]">
          {`We're honored by the feedback, and it fuels our commitment to exceptional and quality services. 
        Read our reviews to hear firsthand how townweb is making a positive impact on  municipalities. 
        Your trust is our greatest asset.`}
        </p>
      </div>

      <section className="flex justify-center">
        <div className="flex gap-5 md:gap-10 justify-center flex-wrap">
          {testimonialsData.map((tes) => (
            <TestimonialCard
              summary={tes.summary}
              comment={tes.comment}
              jobTitle={tes.jobTitle}
              name={tes.name}
              location={tes.location}
              logoUrl={tes.logoUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

type CardProps = {
  summary: string;
  comment: string;
  jobTitle: string;
  name: string;
  location: string;
  logoUrl: string;
};

const TestimonialCard = ({
  summary,
  comment,
  jobTitle,
  name,
  location,
  logoUrl,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[300px] bg-gray-300/5 p-4 border border-gray-400/15">
      <p className="text-xl font-medium">{summary}</p>
      <p className="text-gray-700 italic">{comment}</p>
      <section className="flex gap-2 items-start mt-4">
        <OptImg
          sources={[
            {
              src: logoUrl,
              width: 200,
            },
          ]}
          className="w-20"
        />
        <div className="flex-1 flex flex-col gap-2">
          <p className="line-clamp-2 ">{name}</p>
          <p className="line-clamp-2 text-gray-600 text-sm">
            {location}
          </p>
          <p className="line-clamp-2 text-sm">{jobTitle}</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

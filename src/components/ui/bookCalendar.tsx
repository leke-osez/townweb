import { cn } from "@/utils/style";
import { Button } from "./button";
import { getCurrentQuarter } from "@/utils/helper";

const BookCalendar = ({
  setYear,
  year,
  quarter,
  setQuarter,
}: {
  year: number;
  quarter: number;
  setYear?: (year: number) => void;
  setQuarter?: (quarter: number) => void;
}) => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];
  const handleYear = (year: number) => {
    setYear?.(year);
  };

  const handleQuarter = (quarter: number) => {
    setQuarter?.(quarter);
  };

  const currentQtr = getCurrentQuarter();
  return (
    <div className="flex gap-4 md:gap-6 items-center">
      <section className="flex flex-col gap-2 items-center">
        <p className="font-medium">Year</p>
        <div className="flex flex-col gap-2">
          {years.map((yr) => (
            <Button
              variant={"outline"}
              onClick={() => {
                handleYear(yr);
              }}
              className={cn(
                "border-gray-400",
                year === yr ? "bg-black text-white" : "text-black"
              )}
            >
              {yr}
            </Button>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2 items-center">
        <p className="font-medium">Quarter</p>

        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4].map((qtr) => (
            <Button
              variant={"outline"}
              onClick={() => {
                handleQuarter?.(qtr);
              }}
              disabled={currentQtr > qtr}
              className={cn("border-gray-400", {
                "bg-black text-white":
                  quarter === qtr && currentQtr <= qtr,
                "text-black": quarter !== qtr && currentQtr <= qtr,
                "bg-none border-gray-400 text-gray-400":
                  currentQtr > qtr,
              })}
            >
              {`Q${qtr}`}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BookCalendar;

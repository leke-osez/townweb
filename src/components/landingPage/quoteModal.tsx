import { Modal } from "../ui/modal";
import { Formik } from "formik";
import { QuoteValidationSchema } from "@/schema/validationSchema";
import { MyTextField, PhoneTextField } from "../ui/input";
import {
  RadioContainer,
  RadioItem,
  RadioPrimitiveRoot,
} from "../ui/radio";
import { BuildDuration } from "@/data/formEnums";
import {
  memo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Button } from "../ui/button";
import { CaretLeftIcon } from "@phosphor-icons/react";
import {
  mainGoalForSite,
  municipalitiesData,
  type MunicipalitiesData,
} from "@/data/quoteForm";
import { Combobox } from "@headlessui/react";
import { ComboboxOptions } from "@headlessui/react";
import { ComboboxOption } from "@headlessui/react";
import { ComboboxInput } from "../ui/combobox";
import { Label } from "@headlessui/react";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  municipalName: "",
  durationForBuild: "",
  webstite: "",
};
const QuoteModal = ({
  isOpen,
  close,
  toggle,
  open,
}: {
  isOpen: boolean;
  close: () => void;
  toggle?: () => void;
  open?: () => void;
}) => {
  return (
    <div className="w-full">
      <Modal
        isOpen={isOpen}
        close={close}
        toggle={toggle}
        open={open}
        canCloseOnOverlayClick={true}
        contentClass="sm:w-full md:max-w-[600px] sm:max-w-[600px] px-5"
      >
        <p className="text-xl sm:text-2xl font-semibold w-full text-center my-5">
          Please fill out the form to get a quote
        </p>
        <QuoteForm handleSubmit={(values) => console.log(values)} />
      </Modal>
    </div>
  );
};

const QuoteForm = memo(
  ({
    handleSubmit,
  }: {
    handleSubmit: (values: typeof initialFormValues) => void;
  }) => {
    const [formSteps, setFormSteps] = useState<number>(0);
    const [query, setQuery] = useState("");

    const handleRadio = (
      name: string,
      value: string,
      setFieldValue: (field: string, value: string) => void
    ) => {
      if (formSteps < 1) setFormSteps(1);
      if (formSteps > 0) setFormSteps((prev) => prev + 1);
      console.log(formSteps);
      setFieldValue(name, value);
    };

    return (
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={QuoteValidationSchema}
      >
        {({ handleSubmit, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <section className="w-full flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <MyTextField label="First Name *" name="firstName" />

                {/* <Input
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName && (
                <div className="text-amber-500 text-sm mt-1">
                  {errors.firstName}
                </div>
              )} */}
              </div>
              <div className="flex-1">
                <MyTextField label="Last Name *" name="lastName" />
              </div>
            </section>

            <section className="w-full flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <MyTextField label="Email *" name="email" />
              </div>
              <div className="flex-1">
                <PhoneTextField
                  name="phoneNumber"
                  label="Phone Number *"
                  country="US"
                  defaultCountry="US"
                  withCountryCallingCode
                  setFieldValue={setFieldValue}
                  international={false}
                  countrySelectProps={{ disabled: true }}
                  placeholder="(201) 555-0123"
                />
              </div>
            </section>

            <section>
              <div>
                {/* <Select
                value={""}
                onValueChange={() => {
                  ("");
                }}
              >
                <SelectTrigger className={"max-w-[400px] flex-1"}>
                  <SelectValue
                    placeholder={"Select Grade or Level"}
                    className="placeholder:text-gray-500"
                  />
                </SelectTrigger>
                <SelectContent className="bg-light_pry_bg">
                  {municipalitiesData.map((municipal) => (
                    <SelectItem
                      key={municipal.id}
                      value={`${municipal.municipal}`}
                    >
                      {municipal.alias}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select /> */}
                <Combobox
                  value={query}
                  onChange={setQuery}
                  onClose={() => setQuery("")}
                  as="Fragment"
                >
                  <Label>
                    <label className="text-gray-600 font-medium">
                      {"Municipality Name *"}
                    </label>
                  </Label>
                  <ComboboxInput
                    aria-label="Assignee"
                    displayValue={(municipal: MunicipalitiesData) =>
                      municipal?.option
                    }
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => setQuery(event.target.value)}
                    placeholder="Select municipality name"
                  />
                  <ComboboxOptions
                    anchor="bottom"
                    className="border empty:invisible"
                  >
                    {municipalitiesData.map((municipal) => (
                      <ComboboxOption
                        key={municipal.id}
                        as="Fragment"
                        value={{
                          id: municipal.id,
                          name: municipal.value,
                        }}
                        className="data-focus:bg-blue-100"
                      >
                        {municipal.option}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                </Combobox>
                {/* <MyTextField
                  label="Municipality Name *"
                  name="municipalityName"
                  
                /> */}
              </div>
            </section>

            <section>
              <p className="text-gray-600 font-medium">
                How soon are you planning to move forward with a new
                website? *
              </p>
              <div>
                <RadioPrimitiveRoot
                  className="flex flex-col w-full gap-1 text-sm font-normal"
                  id="durationForBuild"
                  name="durationForBuild"
                  // defaultValue={BuildDuration.NEXT_FEW_MONTHS}
                  onValueChange={(val) =>
                    handleRadio(
                      "durationForBuild",
                      val,
                      setFieldValue
                    )
                  }
                >
                  <RadioItem
                    id="next_few_month"
                    value={BuildDuration.NEXT_FEW_MONTHS}
                  >
                    In the next few months
                  </RadioItem>
                  <RadioItem
                    id="next_year"
                    value={BuildDuration.NEXT_YEAR}
                  >
                    In the next year or so
                  </RadioItem>
                </RadioPrimitiveRoot>
              </div>
            </section>

            {formSteps > 0 && (
              <ExtraFormSteps
                step={formSteps}
                setStep={setFormSteps}
                handleRadio={handleRadio}
                setFieldValue={setFieldValue}
              />
            )}

            <Button
              type="submit"
              className="w-full bg-red-600/90 text-lg sm:text-xl font-medium sm:font-semibold h-auto py-2 my-3"
            >
              Get My Quote
            </Button>
          </form>
        )}
      </Formik>
    );
  }
);

const ExtraFormSteps = ({
  step,
  setStep,
  handleRadio,
  setFieldValue,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  handleRadio: (
    name: string,
    value: string,
    setFieldValue: (field: string, value: string) => void
  ) => void;
  setFieldValue: (field: string, value: string) => void;
}) => {
  const goBack = () => {
    step > 1 && setStep(step - 1);
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-[#F8FAFC] p-3 py-4">
      <p className="w-full text-center font-semibold text-lg my-4">
        To provide a proposal tailored to your needs, we just need a
        bit more information. Based on your input, we'll share a
        ballpark figure as soon as possible.
      </p>

      <section className="opacity-0 translate-y-2 animate-[fadeUp_0.5s_ease-out_forwards] shadow-md rounded-md border border-gray-200 p-3 bg-white mb-4">
        {step > 1 && (
          <Button
            variant={"plain"}
            onClick={goBack}
            className="px-0 py-2"
          >
            <CaretLeftIcon size={20} />
          </Button>
        )}
        <RadioContainer
          title="What would be the main goal of your website? Do you intend for the website to only have the essential information or do you envision it growing with the municipality? *"
          titleClass=""
          itemList={mainGoalForSite}
          onValueChange={(val) =>
            handleRadio("durationForBuild", val, setFieldValue)
          }
          className=""
        />
      </section>
    </div>
  );
};

export default QuoteModal;

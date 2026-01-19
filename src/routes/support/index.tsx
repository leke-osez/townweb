import { Button } from "@/components/ui/button";
import {
  MyTextArea,
  MyTextField,
  PhoneTextField,
} from "@/components/ui/input";
import { SupportValidationSchema } from "@/schema/validationSchema";
import type { SupportFormValues } from "@/types";
import { cn } from "@/utils/style";
import { createFileRoute } from "@tanstack/react-router";
import { Formik } from "formik";

export const Route = createFileRoute("/support/")({
  component: RouteComponent,
});

const initialFormValues: SupportFormValues = {
  fullName: "",
  municipalityName: "",
  municipalityWebAddress: "",
  email: "",
  supportQuestion: "",
  uploadedFile: null,
  phoneNumber: "",
};

function RouteComponent() {
  return (
    <div className="w-full px-4 flex flex-col items-center py-8 bg-amber-100/60">
      <main className="w-full max-w-[1200px]">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            We love to hear from you
          </h1>
          <p className="text-lg md:text-xl">
            How can we help you today?
          </p>
        </div>
        <Formik
          initialValues={initialFormValues}
          onSubmit={() => {}}
          validationSchema={SupportValidationSchema}
        >
          {({ handleSubmit, setFieldValue, isValid }) => (
            <div className="mt-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex-1 max-w-160">
                  <MyTextField label="Full Name *" name="fullName" />
                </div>

                <section className="w-full flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <MyTextField
                      label="Municipality Name *"
                      name="municipalityName"
                    />
                  </div>
                  <div className="flex-1">
                    <MyTextField
                      label="Municipality Website Address *"
                      name="municipalityAddress"
                    />
                  </div>
                </section>

                <section className="w-full flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1 ">
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

                <MyTextArea
                  name="supportQuestion"
                  label="Your Question *"
                  rows={10}
                  cols={30}
                  className="max-w-[800px] min-h-[300px] placeholder:text-base p-2 md:p-4"
                  placeholder="Please type in your question here..."
                />

                <Button
                  type="submit"
                  className={cn(
                    "w-full max-w-80 text-lg sm:text-xl font-medium sm:font-semibold h-auto py-2 my-3",
                    {
                      "bg-black/90": isValid,
                      "bg-gray-400": !isValid,
                    },
                  )}
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </form>
            </div>
          )}
        </Formik>
      </main>
    </div>
  );
}

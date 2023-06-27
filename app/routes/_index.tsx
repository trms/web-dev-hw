import { useState } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import Toggle from "../components/toggle";
import FormInput from "../components/formInput"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Cablecast Captioning Calculator" },
    {
      name: "description",
      content:
        "Calculate how many captioning minutes you will need for a year of programming!",
    },
  ];
};

export default function Index() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    averageProgramsPerMonth: 0,
    averageLengthOfProgramsInHours: 0,
    needsTranslations: false,
  });
  const [hasFormSubmit, setHasFormSubmit] = useState(false);
  const [captionMinutes, setCaptionMinutes] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    console.log(name, value);
    setFormState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInput()) {
      setHasError(true);
    } else {
      try {
        fetch("/api/leads", {
          method: "POST",
          body: JSON.stringify(formState),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
      setHasFormSubmit(true);
      calcCaptionMinutes();
    }
  };

  const validateInput = () => {
    if (formState.name === "" || formState.name.length < 2) {
      return false;
    } else if (formState.email === "" || !formState.email.includes("@")) {
      return false;
    } else {
      return true;
    }
  };

  const calcCaptionMinutes = () => {
    let captioningMinutes =
      formState.averageProgramsPerMonth *
      formState.averageLengthOfProgramsInHours *
      60;
    setCaptionMinutes(captioningMinutes);
  };

  return (
    <div className="app-container mx-auto index mt-12 px-5">
      <h1 className="text-5xl uppercase text-center	heading mb-5">
        Captioning Calculator
      </h1>
      <div className="grid grid-cols-1 content-center md:grid-cols-2">
        <div className="grid content-center text-center	md:text-left">
          <h2 className="text-3xl mb-3">
            How many captioning minutes will you need?
          </h2>
          <p className="text-lg">
            The Cablecast Captioning Calculator is a tool to understand how many
            Cablecast Captioning Minutes you will need for a year of
            programming.
          </p>
        </div>
        <div>
          <img src="cc-decorative-img.png" alt="" className="decorative-img" />
        </div>
      </div>
      <div className="form-container rounded-3xl items-center mb-10">
        {hasFormSubmit ? (
          <>
            <h2 className="text-3xl text-center pt-10 mt-5">
              You will need approximately
            </h2>
            <div className="flex items-center">
              <p className="minutes-needed">{captionMinutes} minutes </p>
            </div>
            <h2 className="text-3xl text-center pb-10">
              {" "}
              Of Closed Captioning for 1 year
            </h2>
          </>
        ) : (
          <form className="flex flex-col text-2xl mt-5" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              label="Name"
              name="name"
              id="name"
              value={formState.name}
              handleInputChange={handleInputChange}
              image="name.png"
              required
            />
            <FormInput
              type="email"
              label="Email"
              name="email"
              id="email"
              value={formState.email}
              handleInputChange={handleInputChange}
              image="email.png"
              required
            />
            <FormInput
              type="number"
              label="Average Number of Programs Per Month"
              name="averageProgramsPerMonth"
              id="averageProgramsPerMonth"
              value={formState.averageProgramsPerMonth}
              handleInputChange={handleInputChange}
              image="number.png"
              min="0"
              required
            />
            <FormInput
              type="number"
              label="Average Length of Program in Hours"
              name="averageLengthOfProgramsInHours"
              id="averageLengthOfProgramsInHours"
              value={formState.averageLengthOfProgramsInHours}
              handleInputChange={handleInputChange}
              image="clock.png"
              min="0"
              required
            />
            <div className="flex flex-col items-center text-center md:flex-row md:text-left">
              <img src="translate.png" alt="" />
              <label htmlFor="needsTranslations" className="flex">
                Do You Need Translations?
                <Toggle onChange={handleInputChange} />
              </label>
            </div>
            <div className="text-center">
            {hasError && ( // if hasError is true, then render the error message 
              <p className="text-red-500 mt-5">There was an error in your submission. Please ensure your name has at least 2 characters and your email contains an '@'.</p>
            )}
              <button className="uppercase btn green my-5 rounded-3xl px-7 py-2">
                Calculate
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

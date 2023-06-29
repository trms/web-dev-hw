import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { useIsSubmitting } from "remix-validated-form";
import { useField } from "remix-validated-form";
import { useState, useEffect } from "react";

/*------------------------------------------
    HELPER FUNCTIONS
  ------------------------------------------ */
// NOTE: I decided to try out remix-validated-form because of it's simplicity and ease for validation. I originally used 'useActionData();' to do server-side validation, but ran into some issues due to returning a JSON response instead of a redirect, which caused the app to stay on the action's route.

const validator = withZod(
    z.object({
        name: z.string().min(1, { message: "First name is required" }),
        email: z.string().min(1, { message: "Email is required" }).email("Must be a valid email"),
        averageProgramsPerMonth: z.string().min(1, { message: "Average Number of Programs Per Month is required" }),
        averageLengthOfProgramsInHours: z
            .string()
            .min(1, { message: "Average Length Of Programs In Hours is required" }),
    })
);

/*------------------------------------------
        JSX ELEMENTS
  ------------------------------------------ */
const SubmitButton = () => {
    const isSubmitting = useIsSubmitting();
    return (
        <button type="submit" disabled={isSubmitting} className="rounded-full bg-logo-green text-white p-2 px-4">
            {isSubmitting ? "CALCULATING..." : "CALCULATE"}
        </button>
    );
};

type TextInputProps = {
    name: string;
    label: string;
    type: string;
};

// NOTE: remix-validated-form helped me to reduce my code quite a bit by being able to reuse a single component for both inputs and error handling. It was easy to customize the styles in one place as well.
const TextInput = ({ name, label, type }: TextInputProps) => {
    const { error, getInputProps } = useField(name);
    const [borderColor, setBorderColor] = useState("medium-grey");

    useEffect(() => {
        error ? setBorderColor("red-500") : setBorderColor("medium-grey");
    }, [error]);

    return (
        <div className="sm:flex sm:grow">
            <label className="sm:mr-4 flex items-center sm:flex-nowrap" htmlFor={name}>
                {label}
            </label>
            <input
                className={`rounded-3xl border-4 border-${borderColor} py-px pl-1.5 text-center w-full max-w-sm`}
                {...getInputProps({
                    id: name,
                    type: type,
                })}
            />
            {error && <div className="text-red-500 text-sm pl-2">*{error}</div>}
        </div>
    );
};

export default function Calculator() {
    // NOTE: I wasn't sure if you wanted the calculation to occur in the backend or frontend. I chose the frontend since it wasn't a complex function, and didn't slow down the the user's experience.
    const [yearlyCaptionMins, setYearlyCaptionMins] = useState(0);

    const calculateCaptions = (form) => {
        const averageProgramsPerMonth = form.averageProgramsPerMonth;
        const averageLengthOfProgramsInHours = form.averageLengthOfProgramsInHours;
        setYearlyCaptionMins(averageProgramsPerMonth * averageLengthOfProgramsInHours * 60);
    };

    const CalculatorForm = () => {
        return (
            <ValidatedForm
                validator={validator}
                action="/api/leads"
                method="POST"
                className="text-2xl"
                onSubmit={calculateCaptions}
            >
                <div className="flex justify-start items-center flex-wrap sm:flex-nowrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <TextInput name="name" label="Name:" type="text" />
                </div>
                <div className="flex justify-start items-center flex-wrap sm:flex-nowrap my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <TextInput name="email" label="Email:" type="text" />
                </div>
                <div className="flex justify-start items-center flex-wrap sm:flex-nowrap my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                    </svg>
                    <TextInput
                        name="averageProgramsPerMonth"
                        label="Average Number of Programs Per Month:"
                        type="number"
                    />
                </div>
                <div className="flex justify-start items-center flex-wrap sm:flex-nowrap my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <TextInput
                        name="averageLengthOfProgramsInHours"
                        label="Average Length Of Programs In Hours:"
                        type="number"
                    />
                </div>
                <div className="flex justify-start items-center flex-wrap sm:flex-nowrap my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>
                    <span className="ml-3 mr-4  text-gray-900 dark:text-gray-300">Do You Need Translations?</span>
                    <label className="relative inline-flex items-center cursor-pointer my-0 mx-auto sm:ml-0">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            id="needsTranslations"
                            name="needsTranslations"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-logo-green dark:peer-focus:ring-logo-green dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-logo-green"></div>
                    </label>
                </div>
                <div className="text-center">
                    <SubmitButton />
                </div>
            </ValidatedForm>
        );
    };
    const CalculatorResults = () => {
        return (
            <>
                <h1 className="text-2xl text-center">You will need approximately</h1>
                <div className="text-center my-8">
                    <input
                        id="closedCaptioning"
                        className="rounded-3xl border-4 border-medium-grey py-2 pl-1.5 text-center bg-white"
                        value={yearlyCaptionMins}
                        readOnly={true}
                        disabled={true}
                    />
                </div>
                <h2 className="text-2xl text-center">Of Closed Captioning Minutes for 1 year</h2>
            </>
        );
    };

    return (
        <div className="bg-light-grey container mx-auto rounded-3xl lg:w-7/12 w-11/12 p-10 lg:pl-14 pl-4 mt-6 lg:mb-10">
            {yearlyCaptionMins === 0 ? <CalculatorForm /> : <CalculatorResults />}
        </div>
    );
}

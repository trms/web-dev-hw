export default function Calculator() {
    const Form = () => {
        return (
            <form action="/api/leads" method="POST" className="text-2xl">
                <div className="flex justify-start items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <label className="mr-4 flex items-center" htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Pat Smith"
                        className="rounded-3xl border-4 border-medium-grey py-px pl-1.5 text-center"
                    />
                </div>
                <div className="flex justify-start items-center my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4"
                    >
                        <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <label className="mr-4 flex items-center" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        placeholder="patsmith@gmail.com"
                        className="rounded-3xl border-4 border-medium-grey py-px pl-1.5 text-center"
                    />
                </div>
                <div className="flex justify-start items-center my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                    </svg>
                    <label className="mr-4 flex items-center" htmlFor="averageProgramsPerMonth">
                        Average Number of Programs Per Month:
                    </label>
                    <input
                        id="averageProgramsPerMonth"
                        placeholder="10"
                        className="rounded-3xl border-4 border-medium-grey py-px pl-1.5 text-center"
                    />
                </div>
                <div className="flex justify-start items-center my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <label className="mr-4 flex items-center" htmlFor="averageLengthOfProgramsInHours">
                        Average Length Of Programs In Hours:
                    </label>
                    <input
                        id="averageLengthOfProgramsInHours"
                        placeholder="2"
                        className="rounded-3xl border-4 border-medium-grey py-px pl-1.5 text-center"
                    />
                </div>
                <div className="flex justify-start items-center  my-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#26A35C"
                        className="w-10 h-10 mr-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>
                    <span className="ml-3 mr-4  text-gray-900 dark:text-gray-300">Do You Need Translations?</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-logo-green dark:peer-focus:ring-logo-green dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-logo-green"></div>
                    </label>
                </div>
                <div className="text-center">
                    <button className="rounded-full bg-logo-green text-white p-2 px-4">CALCULATE</button>
                </div>
            </form>
        );
    };
    const FormResult = () => {
        return <h1>FormResult</h1>;
    };

    return (
        <div className="bg-light-grey container mx-auto rounded-3xl w-7/12 p-10 pl-14 mt-6 mb-10">
            <Form />
        </div>
    );
}

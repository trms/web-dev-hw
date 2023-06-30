import type {V2_MetaFunction} from '@remix-run/node'
import headerImage from '../imgs/calc-img.png'
import { UserIcon, HashtagIcon, ClockIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import CommonToggle from '~/shared/components/CommonToggle'
import CommonInput from '~/shared/components/CommonInput'
const inputs = [
    { name: 'name', label: 'Name', icon: UserIcon, inputType: 'text' },
    { name: 'email', label: 'Email', icon: EnvelopeIcon, inputType: 'email' },
    { name: 'averageProgramsPerMonth', label: 'Average Number of Programs Per Month', icon: HashtagIcon, inputType: 'number' },
    { name: 'averageLengthOfProgramsInHours', label: 'Average Length of Program in Hours', icon: ClockIcon, inputType: 'number' },
]


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Captioning Calculator" },
    { name: "description", content: "Welcome to your new favorite captioning calculator!" },
  ];
};

export default function Index() {
    return (
        <div className="w-full border-t-2 border-green-500 h-full flex items-center flex-col max-w-5xl px-8 mx-auto md:px-16">
            <div>
                <h1 className="text-3xl mt-10 text-center text-gray-500 font-light uppercase tracking-wide">Captioning Calculator</h1>
                <div className="mt-10 w-full grid grid-cols-1 space-x-7 mx-auto md:grid-cols-3">
                     <div className="flex flex-col justify-center order-2 md:order-1 md:col-span-2">
                        <p className="text-gray-500 text-2xl">
                            How many captioning minutes will you need?
                        </p>
                        <p className="text-gray-400 pt-3">
                            The Cablecast Captioning Calculator is to tool to understand how many Cablecast captioning minutes you will need for a year of programming.
                        </p>
                  </div>
                  <div className="order-1 md:order-2">
                      <img src={headerImage} alt="Calc_Img" className="mx-auto mb-5 max-w-[14rem]" />
                  </div>
              </div>
            </div>
            <div className="bg-gray-100 mt-8 p-12 w-full rounded-2xl">
                {/* TODO: Conditionally render based on whether or not we have an answer to the "yearlyCaptionMins = averageProgramsPerMonth * averageLengthOfProgramsInHours * 60" formula */}
                {/* I will be honest, I could not for the life of me figure out how to grab data from our Resource Route, so that is why I am leaving this TODO. */}
                <div className="flex-col items-center hidden">
                    <p className="text-2xl mr-5 text-gray-600 tracking-wide">
                        You will need approximately
                    </p>
                    <p className="bg-white my-8 text-2xl border-2 px-10 py-2 border-gray-400 rounded-full text-gray-600">
                        {}
                    </p>
                    <p className="text-2xl mr-5 text-gray-600 tracking-wide">
                        Of Closed Captioning Per Year
                    </p>
                </div>
                <form
                    action="/leads"
                    method="POST"
                    onSubmit={(event) => { event.preventDefault(); }}
                >
                    {
                        inputs.map((value, idx) => (
                            <CommonInput key={inputs[idx].name} inputItem={inputs[idx]} />
                        ))
                    }
                    <div className="mb-5 flex items-center">
                        <GlobeAltIcon
                            className="h-8 w-8 text-primary inline mr-2 stroke-2 mb-1 "
                        />
                        <label htmlFor="translationToggle" className="text-xl mr-5 text-gray-600 tracking-wide">Do You Need Translations?</label>
                        <CommonToggle inputName={'needsTranslations'} />
                    </div>
                    <div className="mt-6 w-full flex flex-col items-center">
                        <button
                            type="submit"
                            className="bg-primary px-5 py-2 rounded-full text-2xl text-white shadow-sm"
                        >
                            CALCULATE
                        </button>
                    </div>
                </form>
          </div>
    </div>
  );
}

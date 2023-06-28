/* eslint-disable jsx-a11y/alt-text */
import type { V2_MetaFunction } from '@remix-run/node';
import mainLogo from '../../public/mainLogo.svg';
import ccLogo from '../../public/cclogo.png';
import { useState } from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Cablecast' },
    { name: 'description', content: 'Cablecast Community Media' },
  ];
};

export default function Index() {
  const [submitData, setSubmitData] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    averageProgramsPerMonth: '',
    averageLengthOfProgramsInHours: '',
    needsTranslations: false,
  });
  const [apiResponse, setApiResponse] = useState({ lead: null });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitData(true);

    const form = e.target;

    const data = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      averageProgramsPerMonth: Number(
        form.querySelector('input[name="averageProgramsPerMonth"]').value
      ),
      averageLengthOfProgramsInHours: Number(
        form.querySelector('input[name="averageLengthOfProgramsInHours"]').value
      ),
      needsTranslations: form.querySelector('input[name="needsTranslations"]')
        .checked,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      setApiResponse(responseData);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const yearlyCaptionMins = apiResponse?.lead?.yearlyCaptionMins || 0;
  console.log(JSON.stringify(yearlyCaptionMins));

  return (
    <div className="app w-full h-full min-h-min">
      <div className="bg-[#545c6f] h-24 border-b-[#2EB466] border-b-8">
        <div className="flex m-auto max-w-7xl">
          <nav className="max-w-[1200] mx-auto flex">
            <a href="/" aria-label="logo">
              <img src={mainLogo} className="w-36 h-20" />
            </a>
            <ul className="text-white flex m-auto text-lg items-center">
              <li className="px-6 cursor-pointer">Products</li>
              <li className="px-6 cursor-pointer">Services &amp; Add Ons</li>
              <li className="px-6 cursor-pointer">Support</li>
              <li className="px-6 cursor-pointer">News &amp; Resources</li>
              <li className="px-6 cursor-pointer">About Us</li>
              <div>
                <ul className="text-white inline-flex mx-auto px-2">
                  <li className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="fill-white h-7 cursor-pointer"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </li>
                  <li className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="fill-white h-7 cursor-pointer"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </li>
                  <li className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="fill-white h-7 cursor-pointer"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3090C6] hover:bg-[#2F82CC] w-36 h-12 text-base flex items-center justify-center rounded-s cursor-pointer">
                <a href="/">GET IN TOUCH</a>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-3/4 mx-auto text-[#545C6D]">
        <h1 className="text-5xl text-center py-10">CAPTIONING CALCULATOR</h1>
      </div>
      <div className="w-3/4 mx-auto flex text-[#545C6D]">
        <div className="w-2/3">
          <h2 className="text-3xl tracking-wider py-4">
            How many captioning minutes will you need?
          </h2>
          <p className="text-xl tracking-wide">
            The Cablecast Captioning Calculator is a tool to understand how many
          </p>
          <p className="text-xl tracking-wide">
            Cablecast Captioning Minutes you will need for a year of
            programming.
          </p>
        </div>
        <div className="w-1/3">
          <img src={ccLogo} />
        </div>
      </div>
      <div className="w-3/4 mx-auto bg-[#EDEEF1] rounded-3xl text-center mb-64">
        {!submitData ? (
          <form className="block pb-12" onSubmit={handleSubmit}>
            <div className="flex m-auto justify-left align-left pt-10 pb-6 w-3/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-[#2EB466] h-16"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
              <p className="text-[#545C6D] text-3xl tracking-wider py-4 px-5">
                What is your name?:
              </p>
              <input
                className="border-4 border-[#8E97A9] rounded-full text-center"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex m-auto justify-left align-left pt-10 pb-6 w-3/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-[#2EB466] h-16"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <p className="text-[#545C6D] text-3xl tracking-wider py-4 px-5">
                What is your email?:
              </p>
              <input
                className="border-4 border-[#8E97A9] rounded-full text-center"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex m-auto justify-left align-left pt-10 pb-6 w-3/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-[#2EB466] h-16"
              >
                <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
              </svg>
              <p className="text-[#545C6D] text-3xl tracking-wider py-4 px-5">
                Average Number of Programs Per Month:
              </p>
              <input
                className="border-4 border-[#8E97A9] rounded-full text-center"
                type="number"
                name="averageProgramsPerMonth"
                value={formData.averageProgramsPerMonth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex m-auto justify-left align-left py-6 w-3/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-[#2EB466] h-16"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p className="text-[#545C6D] text-3xl tracking-wider py-4 px-5">
                Average Length of Program in Hours:
              </p>
              <input
                className="border-4 border-[#8E97A9] rounded-full text-center"
                type="number"
                name="averageLengthOfProgramsInHours"
                value={formData.averageLengthOfProgramsInHours}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex m-auto justify-left align-left py-6 w-3/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-[#2EB466] h-16"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>
              <p className="text-[#545C6D] text-3xl tracking-wider py-4 px-5">
                Do You Need Translations?
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="needsTranslations"
                  checked={formData.needsTranslations}
                  onChange={handleChange}
                />
                <div className="w-20 h-10 bg-gray-200 peer-focus:outline-none peer-focus:none peer-focus:transparent dark:peer-focus:none rounded-full peer dark:bg-[#8E97A9] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-4 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9 after:w-9 after:transition-all dark:border-[#8E97A9] peer-checked:bg-[#2EB466]"></div>
              </label>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white text-3xl tracking-wider py-4 px-5 rounded-full w-64"
              type="submit"
            >
              CALCULATE
            </button>
          </form>
        ) : (
          <>
            <h3 className="text-[#545C6D] text-3xl tracking-wider py-12 px-5">
              You will need approximately
            </h3>
            <div>
              <input
                className="h-16 w-72 border-4 border-[#8E97A9] rounded-full text-center text-[#545C6D] bg-white"
                type="text"
                value={`${yearlyCaptionMins} mins`}
                disabled
              />
            </div>
            <h3 className="text-[#545C6D] text-3xl tracking-wider py-12 pt-5 pb-24">
              Of Closed Captioning for 1 year
            </h3>
          </>
        )}
      </div>
    </div>
  );
}

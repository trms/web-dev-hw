import logo from "../../public/cablecast-logo.png";
import { useState } from "react";

export default function Navigation() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="flex items-center md:justify-between justify-center flex-wrap bg-dark-grey p-6 lg:px-64 text-xl border-b-8 border-logo-green">
            <img src={logo} className="lg:mx-10" />
            <div className="md:hidden flex items-center">
                <button className="outline-none" onClick={() => setNavbar(!navbar)}>
                    <svg
                        className="w-6 h-6 text-gray-500"
                        x-show="! showMenu"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 00 24 24"
                        stroke="white"
                    >
                        <path d="m4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div>
                <a
                    href="/"
                    className={`block mt-4 md:inline-block md:mt-0 text-white mr-4 ${navbar ? "block" : "hidden"}`}
                >
                    Products
                </a>
                <a
                    href="/"
                    className={`block mt-4 md:inline-block md:mt-0 text-white mr-4 ${navbar ? "block" : "hidden"}`}
                >
                    Services & Add Ons
                </a>
                <a
                    href="/"
                    className={`block mt-4 md:inline-block md:mt-0 text-white mr-4 ${navbar ? "block" : "hidden"}`}
                >
                    Support
                </a>
                <a
                    href="/"
                    className={`block mt-4 md:inline-block md:mt-0 text-white mr-4 ${navbar ? "block" : "hidden"}`}
                >
                    News & Resources
                </a>
                <a
                    href="/"
                    className={`block mt-4 md:inline-block md:mt-0 text-white mr-4 ${navbar ? "block" : "hidden"}`}
                >
                    About Us
                </a>
            </div>
            <div className="md:flex hidden">
                {/* Twitter */}
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" fill="white" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                {/* Facebook */}
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" fill="white" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                {/* Linkedin  */}
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" fill="white" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
            </div>
            <div>
                <a
                    href="#"
                    className="lg:block hidden
                     text-base p-4 leading-none border border-cta-blue rounded text-white bg-cta-blue mt-4 md:mt-0 font-bold"
                >
                    GET IN TOUCH
                </a>
            </div>
        </nav>
    );
}

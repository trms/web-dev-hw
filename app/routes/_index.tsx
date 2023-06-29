import type { V2_MetaFunction } from "@remix-run/node";
import ccImage from "../../public/cc-img.png";
import Navigation from "../components/navigation";
import Calculator from "../components/calculator";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Captioning Calculator" },
        {
            name: "description",
            content:
                "A prototype of a closed caption calculator that can be used to capture leads for a Closed Captioning Project",
        },
    ];
};

export default function Index() {
    return (
        <>
            <Navigation />
            <div>
                <h1 className="lg:text-6xl text-3xl text-center lg:my-14 my-10">CAPTIONING CALCULATOR</h1>
                <div className="grid lg:grid-cols-3 gap-4 lg:mx-80 mx-10">
                    <div className="lg:col-span-2 lg:mx-24">
                        <h2 className="lg:text-3xl text-xl font-bold my-8">
                            How many captioning minutes will you need?
                        </h2>
                        <p className="text-xl">
                            The Cablecast Captioning Calculator is a tool to understand how many cablecast Captioning
                            Minutes you will need for a year of programming.
                        </p>
                    </div>
                    <div>
                        <img className="my-0 mx-auto lg:ml-0" src={ccImage} alt="closed captioning image" />
                    </div>
                </div>
            </div>
            <Calculator />
        </>
    );
}

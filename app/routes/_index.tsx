import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Captioning Calculator" },
        {
            name: "description",
            content:
                "A prototype of a closed caption calculator that can be used to capture leads for our Closed Captioning Project",
        },
    ];
};

export default function Index() {
    return (
        <div>
            <h1 className="text-3xl font-bold">CAPTIONING CALCULATOR</h1>
            <h2 className="text-3xl font-bold">How many captioning minutes will you need?</h2>
            <p>
                The Cablecast Captioning Calculator is a tool to understand how many cablecast Captioning Minutes you
                will need for a year of programming.
            </p>
            {/*  
        // Use the form below if you wan to go remix style, or just use fetch in an event handler. 
      */}
            <form action="/api/leads" method="POST">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Pat Smith" />
            </form>
        </div>
    );
}

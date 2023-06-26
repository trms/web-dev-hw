import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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

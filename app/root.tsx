import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./styles/tailwind.css";
import styles from "./styles/app.css"
import toggleStyles from "./styles/toggle.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous"},
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;900&display=swap", crossOrigin: "anonymous"},
  { rel: "stylesheet", href: styles},
  { rel: "stylesheet", href: toggleStyles}
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-grey": "#535B6F",
                "cta-blue": "#2F87CA",
                "logo-green": "#26A35C",
                "light-grey": "#EDEEF1",
                "medium-grey": "#8E98A9",
            },
        },
    },
    plugins: [],
} satisfies Config;

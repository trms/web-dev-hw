import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-grey": "#535B6F",
                "cta-blue": "#2F87CA",
                "logo-green": "#26A35C",
            },
        },
    },
    plugins: [],
} satisfies Config;

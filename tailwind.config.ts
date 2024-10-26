import type {Config} from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    corePlugins: {
        container: false, // Disable the container plugin
    },
    theme: {
        extend: {
            colors: {
                blue: "#1d1ae5",
                pink: "#e46ba1",
                yellow: "#ffe600",
                grey: "#7f7f7f",
                "info-black": "#262626",
                "light-grey": "#d9d9d9",
            },
            fontFamily: {
                roboto: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
                bebasNeue: [
                    "var(--font-bebasNeue)",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
export default config;

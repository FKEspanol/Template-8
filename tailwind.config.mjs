/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                dark: "#1f1f1f",
                primary: "#98C949",
                smoke: "#4D4D5C",
                lightenDark: "#2E2E37",
            },
        },
    },
    plugins: [],
};

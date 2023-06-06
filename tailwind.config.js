/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{html,ts}",
        "./src/app/views/pages/*.{html,ts}",
        "./src/app/views/partials/*.{html,ts}",
    ],
    darkMode: "media",
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

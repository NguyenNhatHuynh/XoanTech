// frontend/tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6B48FF', // Màu tím của VinhWeb
                secondary: '#1A1A1A', // Màu đen
            },
        },
    },
    plugins: [],
};
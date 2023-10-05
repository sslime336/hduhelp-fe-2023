/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'console-title-image': "url('../public/imgs/console-title-image.png')",
                'zako': "url('../public/imgs/zako.png')",
            },
            spacing: {
                '128': '32rem',
                '156': '35rem',
            },
        },
    },
    plugins: [],
}


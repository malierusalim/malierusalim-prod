/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                'vertical': '9 / 16',
            },
		},
	},
	plugins: [require('flowbite/plugin')],
}

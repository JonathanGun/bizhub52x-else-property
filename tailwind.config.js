const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			...colors,
			black: '#171717',
			'custom-yellow': '#ffd424',
			'wa-green': '#25D366'
		}
	},
	plugins: []
};

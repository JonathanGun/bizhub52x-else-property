const colors = require('tailwindcss/colors');

const DARK_GREEN = '#10281E';
const DARK_PURPLE = '#350034';
const DARK_GRAY = '#171717';
const ACCENT_YELLOW = '#ffd424';
const ACCENT_YELLOW_DARK = '#f9c80e';
const WA_GREEN = '#25D366';
const DARK_BLUE = '#080D13';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			...colors,
			black: DARK_GRAY,
			accent: ACCENT_YELLOW,
			'accent-dark': ACCENT_YELLOW_DARK,
			'wa-green': WA_GREEN,
			primary: DARK_GRAY,
			'banner-blue': DARK_BLUE
		}
	},
	plugins: []
};

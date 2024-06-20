/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				Nutmeg: "hsl(14, 45%, 36%)",
				"Dark-Raspberry": "hsl(332, 51%, 32%)",
				White: "hsl(0, 0%, 100%)",
				"Rose-White": "hsl(330, 100%, 98%)",
				Eggshell: "hsl(30, 54%, 90%)",
				"Light-Grey": "hsl(30, 18%, 87%)",
				"Wenge-Brown": "hsl(30, 10%, 34%)",
				"Dark-Charcoal": "hsl(24, 5%, 18%)",
			},
			fontFamily: {
				Outfit: ["Outfit"],
				"Young-Serif": ["Young-Serif"],
			},
			height: {
				"10dvh": "10dvh",
				"20dvh": "20dvh",
				"30dvh": "30dvh",
				"40dvh": "40dvh",
				"50dvh": "50dvh",
				"60dvh": "60dvh",
				"70dvh": "70dvh",
				"80dvh": "80dvh",
				"90dvh": "90dvh",
				"100dvh": "100dvh",
			},
			width: {
				"10dvw": "10dvw",
				"20dvw": "20dvw",
				"30dvw": "30dvw",
				"40dvw": "40dvw",
				"50dvw": "50dvw",
				"60dvw": "60dvw",
				"70dvw": "70dvw",
				"80dvw": "80dvw",
				"90dvw": "90dvw",
				"100dvw": "100dvw",
			}
		},
	},
	plugins: [],
};

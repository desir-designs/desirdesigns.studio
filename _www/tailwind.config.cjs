/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: "Gothic"
			},
			
		},
	},
	plugins: [
		 require('tailwindcss-border-gradients')(),
		

		 require('tailwindcss-elevation')(
			{
			  color: '77,192,181',
			  opacityBoost: '0.23'
			}
		  ),
		  require('@tailwindcss/aspect-ratio'),
		  require('tailwindcss-debug-screens'),



	],
}

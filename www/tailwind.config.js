/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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


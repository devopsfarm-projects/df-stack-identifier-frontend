// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-black': '#000000',
        'logo-blue': '#17153B',   // Adjust this to match your logo's blue
        'logo-purple': '#000000', // Adjust this to match your logo's purple
        'logo-pink': '#17153B',   // Adjust this to match your logo's pink
      },
      backgroundImage: theme => ({
        'logo-gradient': `linear-gradient(to right, ${theme('colors.logo-blue')}, ${theme('colors.logo-purple')}, ${theme('colors.logo-pink')})`,
      }),
       animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

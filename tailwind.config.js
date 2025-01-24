/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: '#6d6d6eb3',
        thinkWhite:'#6d6d6e66',
        darkWhite:'#ffffffbf',
        thinBlack:"rgba(0,0,0,0.75)",
        inputBackground:'#333',
        btnbgColor:'#e50914',
        whitish:'#b3b3b3',
        lastSignUpColor:'#737373'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
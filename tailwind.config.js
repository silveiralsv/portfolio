module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        unfold: {
          '0%': {
            transform: 'scale(1)',
            
          },
          '100%': {
            transform: 'scale(1)',
            
          },
          
          '50%' : {
            transform: 'scale(1.07)',
          },
      },
    },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'unfold-slow': 'unfold 7s  infinite',
      },

      colors: {
        "slate-850": "#0c2034",
      }
    },
  },
  plugins: [],
}
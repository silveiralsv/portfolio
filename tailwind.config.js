module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyFrames: {
        'hide-y': {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translate-y-0',
          }
        },
        showy: {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        'hide-y': 'hide-y 1s linear',
        showy: 'showy 0.5s ',
      },

      colors: {
        "slate-850": "#0c2034",
      }
    },
  },
  plugins: [],
}
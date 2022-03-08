module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'main-accent': 'linear-gradient(26.57deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%)',
        'storytext': 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%)',
        'feature-story': 'radial-gradient(68.48% 68.48% at 0% 100%, #FFC593 0%, rgba(188, 113, 152, 0.496968) 52.36%, rgba(90, 119, 255, 0.0001) 100%)',
      },
    },
  },
  plugins: [],
}
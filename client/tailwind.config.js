/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montser: ["Montserrat", "sans-serif"],
        Outfit : ["Outfit", "sans-serif"],
       },
       backgroundImage: {
        'forest': "url('/src/assets/animaeForest.png')",
        'naruto': "url('/src/assets/naruto.png')",
        'parallaxCloud': "url('/src/assets/parallax/Cloud.png')",
        'parallaxCloudThreeSides': "url('/src/assets/parallax/CloudThreeSides.png')",
        'parallaxCloudAllSides': "url('/src/assets/parallax/CloudAllsides.png')",
        'parallaxGrass1': "url('/src/assets/parallax/Grass1.png')",
        'parallaxGrass2': "url('/src/assets/parallax/Grass2.png')",
        'parallaxGrass3': "url('/src/assets/parallax/Grass3.png')",
        'parallaxGrass4': "url('/src/assets/parallax/Grass4.png')",
        'parallaxMoon': "url('/src/assets/parallax/Moon.png')",
        'parallaxMountain1': "url('/src/assets/parallax/Mountain1.png')",
        'parallaxMountain2': "url('/src/assets/parallax/Mountain2.png')",
        'parallaxStars': "url('/src/assets/parallax/Stars.png')",
        
        
      }
    },
  },
  plugins: [

  ],

}
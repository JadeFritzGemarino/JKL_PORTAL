import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // This links the name 'jkl-hero' to your campus image
        'jkl-hero': "url('/jkl_assets/jkl_bg.png')",
      },
      colors: {
        // Setting your brand green here
        'jkl-green': '#00a859',
      }
    },
  },
  plugins: [],
};
export default config;
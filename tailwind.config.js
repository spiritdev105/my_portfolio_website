/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#314833",
        secondary: "#393A47",
        accent: "#F3A615",
        accentDark: "#080907",
        blackFon:'#1A1435',
        accents: { black: "#AE7812" },
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.accent'), 0 0 12px theme('colors.accents.black')",
        neonDark: "0 0 5px theme('colors.accentDark'), 0 0 12px theme('colors.accentDark')",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s, forwards 5s  ',
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
        "0%": {
          opacity: "0",
        },
        "0.1%": {
          opacity: "0",
        },
        "50%": {
          opacity: "0",
        },
        "50.1%": {
          opacity: "0",
        },
        "100%": {
          opacity: "0",
        },
      },
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
        kurale: [`var(--font-kurale)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Garrison Brand Colors - From Logo
        navy: {
          deep: '#0F1C2E',
          DEFAULT: '#1B365D',
          light: '#264573',
        },
        gold: {
          dark: '#B8860B',
          DEFAULT: '#C5A572',
          light: '#D4B896',
        },
        border: "rgba(197, 165, 114, 0.2)",
        input: "#0F1C2E",
        ring: "#C5A572",
        background: "#0F1C2E",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: '#C5A572',
          foreground: '#0F1C2E',
        },
        secondary: {
          DEFAULT: '#1B365D',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1B365D',
          foreground: 'rgba(255, 255, 255, 0.6)',
        },
        accent: {
          DEFAULT: '#B8860B',
          foreground: '#0F1C2E',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

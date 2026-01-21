// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
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
        primary: {
          DEFAULT: "#cc5803",
          dark: "#D14E0F",
          light: "#F48B59",
        },
        background: {
          dark: "#474747",
          light: "#f1f1f1",
        },
        text: {
          DEFAULT: "#474747",
          secondary: "#c7c3bc",
          light: "#FFFFFF",
        },
        border: "#E5E5E5",
      },
      fontFamily: {
        dosis: ['var(--font-dosis)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
        sans: ['var(--font-karla)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dosis)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
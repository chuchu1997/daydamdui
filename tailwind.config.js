/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'], // Add JetBrains Mono
      },
      fontSize:{
        h1: ['2.5rem', { lineHeight: '2rem' }], // Desktop: 40px
        'h1-sm': ['2rem', { lineHeight: '2.5rem' }], 
        h2: ['2rem', { lineHeight: '2.5rem' }], // Desktop: 32px
        'h2-sm': ['1.5rem', { lineHeight: '2rem' }], // Mobile: 24px
        // Mobile: 32px
        h3: ['1.5rem', { lineHeight: '2rem' }], // Desktop: 28px
        'h3-sm': ['1rem', { lineHeight: '1.75rem' }], // Mobile: 20px
        p: ['1rem', { lineHeight: '1.5rem' }], // Desktop & Mobile: 16px
      },
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Default shade (used with 'bg-primary')
          light: '#4ac4f4',  // Light shade (optional)
          dark: '#1E3A8A',   // Dark shade (optional)
        },
        accent: {
          DEFAULT: '#F59E0B', // Default shade
          light: '#4ac4f4',  // Light shade
          dark: '#B45309',    // Dark shade
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


module.exports = {
  darkMode: "class", // permette di usare JS per attivare la dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // prende tutti i file HTML
  theme: {
    extend: {
      colors: {
        'custom-amber': '#f59e0b'
      }
    }
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.card': {
  backgroundColor: '#f59e0b',
  padding: '1.5rem',
  borderRadius: '1rem',
  color: '#000',
  width: '300px',
  textAlign: 'center',
  border: '4px solid #fcd34d',             // bordo principale
  boxShadow: '4px 4px 0px #000, 8px 8px 0px #dc2626', // effetto “doppio bordo”
},
        '.btn-custom': {
          padding: '0.5rem 1.5rem',
          borderRadius: '9999px',
          fontWeight: '700',
          textTransform: 'uppercase',
          backgroundColor: '#fbbf24',
        },
        '.btn-custom:hover': {
          backgroundColor: '#fcd34d',
        },
      });
    }
  ],
}

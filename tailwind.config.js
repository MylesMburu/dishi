/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins : ['Poppins']
      }
    },
    animation: {
      bounce1: 'bounce 1s',
      ping1: 'ping 0.3s cubic-bezier(0, 0, 0.2, 1)',
      pulse1: 'pulse 0.8s'
    },
  },
  plugins: [],
}

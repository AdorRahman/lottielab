/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-green-500',
    'bg-green-600', 
    'bg-orange-500',
    'bg-orange-600',
    'bg-red-500',
    'bg-red-600',
    'hover:bg-green-600',
    'hover:bg-orange-600', 
    'hover:bg-red-600',
    'shadow-inner',
    'shadow-lg',
    'transform',
    'translate-y-0.5'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
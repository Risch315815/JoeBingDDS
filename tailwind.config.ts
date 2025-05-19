import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBFAF2',
          100: '#F7F4E4',
          200: '#F0E9C9',
          300: '#E8DD9E',
          400: '#D4B72C',  // standard gold
          500: '#C5A61D',
          600: '#A88A1A',
          700: '#8A6F16',
          800: '#6D5511',
          900: '#4F3D0B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config 
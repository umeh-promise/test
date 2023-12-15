import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '1.4rem',
      sm: '1.5rem',
      base: '1.6rem',
      md: '1.8rem',
      lg: '2rem',
      xl: '2.4rem',
      '2xl': '3.6rem',
    },

    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',

      'grey-50': '#fafafb',
      'grey-100': '#e8e8e8',
      'grey-200': '#4f4f4f',
      'grey-300': '#999',
      'grey-400': '#585858',
      'grey-500': '#34333e',
      'grey-600': '#0f1824',
      'grey-700': '#333',
      'grey-800': '#eaecf049',

      'stone-100': '#f9f9f9',
      'stone-200': '#f3ffeb',
      'stone-300': '#d0d5dd',

      'green-100': '#efffef',
    },

    boxShadow: {
      sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    },

    lineHeight: {
      none: '0px',
      1.5: '2rem',
      2: '2.2rem',
      2.5: '2.4rem',
      2.8: '2.8rem',
      3: '3rem',
      4: '4.7rem',
    },

    letterSpacing: {
      3: '0.3px',
      5: '0.5px',
    },

    borderRadius: {
      none: '0px',
      xs: '0.8rem',
      sm: '0.4rem',
      base: '1rem',
      md: '2.2rem',
      lg: '10rem',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        screen: '100dvh',
      },
      listStyleImage: {
        checkmark: 'url(./assets/icons/checkmark.svg)',
      },
    },
  },
  plugins: [],
};
export default config;

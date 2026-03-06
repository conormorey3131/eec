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
        // Premium forest green palette - sophisticated, not bright
        forest: {
          50: '#f4f7f5',
          100: '#e6ebe7',
          200: '#c9d6cd',
          300: '#a3b8a9',
          400: '#789582',
          500: '#577662',
          600: '#435d4d',
          700: '#374b3f',
          800: '#2d3d34',
          900: '#1a2f23',
          950: '#0d1a12',
        },
        // Warm cream/ivory backgrounds
        ivory: {
          50: '#fefdfb',
          100: '#faf9f6',
          200: '#f5f3ee',
          300: '#ebe7df',
          400: '#d9d3c7',
          500: '#c4bcac',
          600: '#a89e8c',
          700: '#8a8072',
          800: '#726a5e',
          900: '#5e574e',
        },
        // Copper/bronze accent - warm, premium metallic feel
        copper: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8bd',
          300: '#e9bd8f',
          400: '#de9a5c',
          500: '#d4803c',
          600: '#b87333',
          700: '#995a2a',
          800: '#7c4928',
          900: '#663d24',
          950: '#371e11',
        },
        // Rich charcoal for text
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1c1c1c',
        },
      },
      fontFamily: {
        // Elegant serif for display - authoritative
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Clean geometric sans for body - professional
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Monospace for data/numbers
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Refined type scale with tight tracking for headlines
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '7xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'editorial': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'elevated': '0 12px 40px -8px rgba(0, 0, 0, 0.12)',
        'dramatic': '0 25px 60px -12px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'copper-glow': '0 0 40px -10px rgba(184, 115, 51, 0.4)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-editorial': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-copper': 'linear-gradient(135deg, #b87333 0%, #d4803c 50%, #995a2a 100%)',
        'gradient-forest': 'linear-gradient(180deg, #1a2f23 0%, #0d1a12 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(184, 115, 51, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(26, 47, 35, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(184, 115, 51, 0.05) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fadeDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal': 'reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        reveal: {
          '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0% 0 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config

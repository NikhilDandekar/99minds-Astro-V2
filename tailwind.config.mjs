/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        purple: {
          DEFAULT: '#aa8fff',
          deep: '#6f4dff',
          light: '#b8bfff',
          pale: '#f1edff',
        },
        ink: {
          DEFAULT: '#0a0a23',
          soft: '#1a1a3e',
        },
        slate: {
          DEFAULT: '#4a4a6a',
          brand: '#4a4a6a',
          light: '#8b8ba8',
        },
        line: {
          DEFAULT: '#e8e6f5',
          soft: '#f4f2fb',
        },
        bg: {
          DEFAULT: '#ffffff',
          alt: '#fafaff',
        },
        accent: {
          cyan: '#00d4ff',
          mint: '#7ef0c5',
          coral: '#ff8a7a',
          gold: '#ffc060',
        },
      },
      fontSize: {
        'hero': 'clamp(44px, 5.8vw, 76px)',
        'section': 'clamp(32px, 4vw, 52px)',
        'quote': 'clamp(22px, 2.6vw, 32px)',
        'cta': 'clamp(36px, 5vw, 60px)',
      },
      letterSpacing: {
        'tighter-hero': '-0.04em',
        'tighter-section': '-0.03em',
      },
      lineHeight: {
        'hero': '0.98',
        'section': '1.05',
      },
      borderRadius: {
        'card': '18px',
        'feature': '16px',
        'pill': '999px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(120deg, #6f4dff 0%, #aa8fff 50%, #00d4ff 100%)',
        'gradient-stats': 'linear-gradient(135deg, #6f4dff 0%, #0a0a23 100%)',
        'gradient-egift': 'linear-gradient(135deg, #6f4dff 0%, #aa8fff 50%, #ff8a7a 100%)',
        'gradient-wallet': 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #6f4dff 100%)',
        'gradient-embed': 'linear-gradient(135deg, #0a0a23 0%, #6f4dff 100%)',
      },
      keyframes: {
        meshShift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        hvFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        meshShift: 'meshShift 20s ease-in-out infinite',
        meshShiftReverse: 'meshShift 25s ease-in-out infinite reverse',
        float: 'float 5s ease-in-out infinite',
        float2: 'float 5s ease-in-out 2s infinite',
        hvFloat: 'hvFloat 6s ease-in-out infinite',
        hvFloat2: 'hvFloat 6s ease-in-out 2s infinite',
        hvFloat4: 'hvFloat 6s ease-in-out 4s infinite',
      },
      maxWidth: {
        'layout': '1280px',
      },
    },
  },
  plugins: [],
};

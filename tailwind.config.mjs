/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        automotive: {
          primary: '#1e40af',
          secondary: '#dc2626',
          accent: '#f59e0b'
        },
        healthcare: {
          primary: '#10b981',
          secondary: '#3b82f6',
          accent: '#8b5cf6'
        },
        realestate: {
          primary: '#7c3aed',
          secondary: '#2563eb',
          accent: '#f59e0b'
        },
        fitness: {
          primary: '#ef4444',
          secondary: '#f97316',
          accent: '#eab308'
        },
        restaurant: {
          primary: '#dc2626',
          secondary: '#ea580c',
          accent: '#f59e0b'
        },
        technology: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4'
        },
        cleaning: {
          primary: '#06b6d4',
          secondary: '#10b981',
          accent: '#3b82f6'
        },
        carpentry: {
          primary: '#e6a34d',
          secondary: '#f70200',
          accent: '#d4912a'
        },
        plumbing: {
          primary: '#1e3a8a',
          secondary: '#1e40af',
          accent: '#06b6d4'
        },
        legal: {
          primary: '#111827',
          secondary: '#374151',
          accent: '#b91c1c'
        },
        education: {
          primary: '#7c3aed',
          secondary: '#a855f7',
          accent: '#3b82f6'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
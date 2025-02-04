/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#FF9800',
        lightGray: '#F5F5F5',
        darkText: '#333333',
      },
      backgroundColor: {
        primary: '#007BFF',
        secondary: '#FF9800',
        light: '#F5F5F5',
        dark: {
          DEFAULT: '#1a1a1a',
          secondary: '#2d2d2d',
        },
      },
      textColor: {
        primary: '#007BFF',
        secondary: '#FF9800',
        dark: '#333333',
      },
      gradientColorStops: {
        'primary-start': '#007BFF',
        'primary-end': '#0056b3',
        'secondary-start': '#FF9800',
        'secondary-end': '#F57C00',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.95)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        rotate3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 60%': { transform: 'rotate(-25deg)' },
          '40%, 80%': { transform: 'rotate(10deg)' }
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeInUp: 'fadeInUp 0.5s ease-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-out',
        fadeInRight: 'fadeInRight 0.5s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        bounce: 'bounce 2s infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        rotate3d: 'rotate3d 7s linear infinite',
        wave: 'wave 2.5s ease-in-out infinite',
        borderPulse: 'borderPulse 1.5s ease-in-out infinite',
        gradientMove: 'gradientMove 3s ease infinite'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
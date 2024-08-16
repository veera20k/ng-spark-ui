/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scale-in": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0.9)",
            opacity: "0.8",
          },
          "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "1" },
        },
        "slide-left-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-right-in": { 
          "0%": {
            transform: "translateX(100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-top-in": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-top-center-in": {
          "0%": {
            transform: "translate(-50%, -100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translate(-50%, 0)",
            opacity: "1",
          },
        },
        "slide-bottom-center-in": {
          "0%": {
            transform: "translate(-50%, 100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translate(-50%, 0)",
            opacity: "1",
          },
        },
        "slide-bottom-in": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "popover-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-left-in": "slide-left-in 0.3s ease-in-out",
        "slide-right-in": "slide-right-in 0.3s ease-in-out",
        "slide-top-in": "slide-top-in 0.3s ease-in-out",
        "slide-bottom-in": "slide-bottom-in 0.3s ease-in-out",
        "slide-top-center-in": "slide-top-center-in 0.3s ease-in-out",
        "slide-bottom-center-in": "slide-bottom-center-in 0.3s ease-in-out",
        "popover-in": "popover-in 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-up": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-down": {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-left": {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"slide-right": {
					"0%": { transform: "translateX(100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"text-reveal": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out forwards",
				"fade-out": "fade-out 0.6s ease-out forwards",
				"scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"slide-left": "slide-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"slide-right": "slide-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"rotate-slow": "rotate-slow 8s linear infinite",
				"float": "float 3s ease-in-out infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

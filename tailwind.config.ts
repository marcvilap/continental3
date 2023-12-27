import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	experimental: { optimizeUniversalDefaults: true },
	future: { disableColorOpacityUtilitiesByDefault: true },
	theme: {
		screens: { sm: '28rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '2rem', xl: '5rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: { sans: "'Stag Sans', sans-serif" },
		},
	},
} satisfies Config

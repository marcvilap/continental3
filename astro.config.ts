import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	//base: '/bc/dejandohuella/neumaticoseficientes',
	integrations: [tailwind({ applyBaseStyles: false })],
})

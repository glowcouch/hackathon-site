// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		inlineStylesheets: "always",
	},
	integrations: [icon()],

	site: "https://hackberry.nz",
});

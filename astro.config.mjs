// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    build: {
        inlineStylesheets: "always",
    },
    integrations: [icon(), sitemap()],

    site: "https://hackberry.nz",
});
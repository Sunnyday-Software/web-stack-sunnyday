// @ts-check
import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [
        tailwind({
                nesting: true,
                applyBaseStyles: false,
            }
        )],
    i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US'],
    }

});
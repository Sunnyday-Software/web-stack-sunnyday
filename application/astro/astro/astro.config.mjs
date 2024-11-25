// @ts-check
import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        nesting: true,
    })],
    i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US'],
    }

});
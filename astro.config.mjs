import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://geri.dev',
    experimental: {
        assets: true
    },
    integrations: [mdx(), tailwind()]
});

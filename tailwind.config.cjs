/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            spacing: {
                '128': '42rem',
                '196': '48rem',
            },
            fontSize: {
                clamp: 'clamp(12px, 1vw, 1rem)',
            },
        },
        screens: {
            'small': '0',
            'large': '900px'
        }
    },
    plugins: [],
}

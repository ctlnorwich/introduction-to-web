// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://web.norwich.io",
    base: "/",
    integrations: [starlight({
        title: 'Introduction to Web',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/ctlnorwich' },
            { icon: 'open-book', label: 'VLE', href: 'https://vle.norwichuni.ac.uk/course/view.php?id=486' }
        ],
        customCss: [
            './src/styles/custom.css',
            './src/sandbox/sandbox.css',
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introduction to HTML', slug: 'guides/html' },
                    { label: 'Introduction to CSS', slug: 'guides/css' },
                    { label: 'Introduction to CSS 2', slug: 'guides/css-2' },
                    { label: 'Introduction to JavaScript', slug: 'guides/javascript' },
                ],
            }
        ],
		}), react()],
});
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://ctlnorwich.github.io/introduction-to-web/",
    base: "/introduction-to-web",
    integrations: [starlight({
        title: 'Introduction to Web',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/ctlnorwich' },
            { icon: 'open-book', label: 'VLE', href: 'https://vle.norwichuni.ac.uk/course/view.php?id=486' }
        ],
        customCss: [
             './src/styles/custom.css',
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introduction to HTML', slug: 'guides/html' },
                ],
            }
        ],
		}), react()],
});
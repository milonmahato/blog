import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Tech Blog",
    description: "A Modern Technology Blog",
    themeConfig: {
        // Site Logo
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg'
        },

        // Navigation Bar
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Articles', link: '/articles/' },
            { text: 'About', link: '/about' },
            { text: 'Tags', link: '/tags' }
        ],

        // Sidebar
        sidebar: [
            {
                text: 'Articles',
                collapsed: true,
                items: [
                    { text: 'Latest Posts', link: '/articles/' },
                    { text: 'Code Examples', link: '/articles/code-examples/' },
                    { text: 'Django', link: '/articles/django/' },
                    { text: 'Web Development', link: '/articles/web-dev/' },
                    { text: 'Programming', link: '/articles/programming/' },
                    { text: 'AI & ML', link: '/articles/ai-ml/' }
                ]
            }
        ],

        // Social Links
        socialLinks: [
            { icon: 'github', link: 'https://github.com/your-username' },
            { icon: 'twitter', link: 'https://twitter.com/your-handle' }
        ],

        // Footer
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Your Name'
        },

        // Enable search
        search: {
            provider: 'local'
        },

        // Add last updated date to posts
        lastUpdated: true
    },

    // Head customization
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap', rel: 'stylesheet' }]
    ]
})
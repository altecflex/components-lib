const path = require("path");

module.exports = {
    title: 'Design System | Alliance Bank',
    ignore: ['**/*.spec.js', '**/**/ThemeProvider.js'],
    styleguideDir: 'dist-docs',
    moduleAliases: {
        'components-lib': path.resolve(__dirname, 'src')
    },
    theme: {
        fontFamily: {
            base: 'sans-serif'
        },
        fontSize: {
            base: 15,
            text: 16,
            small: 13,
            h1: 30,
            h2: 26,
            h3: 22,
            h4: 18,
            h5: 16,
            h6: 12,
        }
    },
    template: {
        favicon: 'https://www.allianceonline.com.my/personal/images/favicon.ico',
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:'https://codepen.io/altecflex/pen/LYpwwLN.css'
                }
            ]
        }
    },
    styleguideComponents: {
        LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
        // StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer'),
    },
    pagePerSection: true,
    sections: [
        {
            name: 'About',
            content: 'styleguide/docs/about.md',
            sections: [
                {
                    name: 'Getting Started',
                    content: 'styleguide/docs/getting-started.md'
                },
                {
                    name: 'Concepts',
                    content: 'styleguide/docs/concepts.md'
                },
                {
                    name: 'Changelog',
                    content: 'styleguide/docs/change-log.md'
                }
            ],
            sectionDepth: 2,
        },
        {
            name: 'Components',
            components: 'src/components/**/*.js',
            sectionDepth: 2, 
            href: false
        }
    ],
    exampleMode: 'expand',
}

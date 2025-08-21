const base = require('./docusaurus.config.base.js');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  ...base,
  // Set the production url of your site here
  url: 'https://archambaultv-prof.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2025A-420-1C1-MA/g5/',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'g5',
        routeBasePath: '/',               // this cohort lives at the root of /g5/
        sidebarPath: require.resolve('./sidebars.g5.js'),
      },
    ],
    [require.resolve('docusaurus-lunr-search'), {
      languages: ['fr'],
    }]
  ],

  themeConfig: {
    ...base.themeConfig,
    navbar: {
      ...base.themeConfig.navbar,
      items: [
        { type: 'docSidebar', sidebarId: 'schedule',    label: 'Échéancier',      position: 'left' },
        // { type: 'docSidebar', sidebarId: 'notes',       label: 'Notes de cours', position: 'left' },
        { type: 'docSidebar', sidebarId: 'evaluations', label: 'Évaluations',  position: 'left' },
                  {
            href: 'https://github.com/archambaultv-prof/2025A-420-1C1-MA/',
            label: 'GitHub',
            position: 'right',
          },
      ],
    },
  },
};

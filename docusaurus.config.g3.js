const base = require('./docusaurus.config.base.js');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  ...base,
  // Set the production url of your site here
  url: 'https://archambaultv-prof.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2025A-420-1C1-MA/g3/',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'g3',
        routeBasePath: '/',               // this cohort lives at the root of /g3/
        sidebarPath: require.resolve('./sidebars.g3.js'),
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
        { type: 'docSidebar', sidebarId: 'notes',       label: 'Notes de cours', position: 'left' },
        { type: 'html',
          // Use a div with the same classes Docusaurus applies to links so font & spacing match
          value: '<div class="navbar__item">Site du groupe 3 (cours du jeudi)</div>',
          position: 'right'
        },
        {href: 'https://archambaultv-prof.github.io/git', label: 'Tutoriel Git', position: 'right'},
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

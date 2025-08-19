// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2025A-420-1C1-MA',
  tagline: 'Exploration du domaine de l\'informatique',
  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://archambaultv-prof.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2025A-420-1C1-MA/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'archambaultv-prof', // Usually your GitHub org/user name.
  projectName: '2025A-420-1C1-MA', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/archambaultv-prof/2025A-420-1C1-MA/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      docs:{
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'Exploration du domaine de l\'informatique',
        logo: {
          alt: 'My Site Logo',
          src: 'img/1C1.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'scheduleSidebar',
            position: 'left',
            label: 'Échéancier',
          },
          {
            type: 'docSidebar',
            sidebarId: 'classNotes',
            position: 'left',
            label: 'Notes de cours',
          },
          {
            type: 'docSidebar',
            sidebarId: 'evaluations',
            position: 'left',
            label: 'Évaluations',
          },
          {
            to: 'https://github.com/archambaultv-prof/2025A-420-1C1-MA/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Cette œuvre est placée sous licence <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 International</a>. Construit avec <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [require.resolve('docusaurus-lunr-search'), {
      languages: ['fr'],
    }]
  ]
};

export default config;

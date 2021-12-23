const test = require('ava')
const { statSync } = require("fs");
const path = require("path");
const metadata = require('../metadata')

md =     {
     sites: {
       '/': {
         description: 'A list of data sets sold on Ethereum ranked by their popularity and decentralization.',
         sitemap: {
           changeFreq: 'hourly',
           lastMod: true,
         },
         title: 'Best Data Sets on Ethereum',
       },
       '/about': {
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../about.md")).mtime,
         },
         title: 'About Us',
       },
       '/blog': {
         sitemap: {
           lastMod: 'never',
         },
       },
       '/changelog': {
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../changelog.md")).mtime,
         },
         title: 'Changelog',
       },
       '/changelog.txt': {
         sitemap: {
           lastMod: 'never',
         },
       },
       '/docs': {
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../docs.md")).mtime,
         },
         title: 'API',
       },
       '/faq': {
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../faq.md")).mtime,
         },
         title: 'FAQ',
       },
       '/ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens': {
         katex: false,
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens.md")).mtime,
         },
         title: 'Ocean Staking FAQ - Everything you should know about staking your OCEAN tokens',
       },
       '/ocean-staking-risks-and-rewards-explained': {
         katex: false,
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../ocean-staking-risks-and-rewards-explained.md")).mtime,
         },
         title: 'Ocean Staking Risks & Rewards Explained',
       },
       '/specification': {
         katex: true,
         sitemap: {
           changeFreq: 'daily',
           lastMod: statSync(path.resolve(__dirname, "../specification.md")).mtime,
         },
         title: 'Specification - How is RPI ranking its data sets',
       },
       _default: {
         description: 'rugpullindex.com ranks the best data sets sold on Ethereum.',
         title: 'rugpullindex.com',
       },
     },
    }


test('Check if importing the metadata file works', async t => {

  t.deepEqual(md, metadata )

})

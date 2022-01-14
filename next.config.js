const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
  },
}

module.exports = nextTranslate(config)

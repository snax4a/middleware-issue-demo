const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

module.exports = nextTranslate(config) // this causes next 12 middleware issue on vercel
// module.exports = config // this works

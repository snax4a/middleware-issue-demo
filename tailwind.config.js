module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: 'class',
  theme: {},
  variants: {
    extend: {},
  },
}

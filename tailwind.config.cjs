/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      blur: {
        xs: "1px",
        xxs: "0.7px"
      }
    }
  },
  plugins: []
}

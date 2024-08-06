// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/stylesheet/main.scss', '~/assets/stylesheet/colors.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint'
  ],
})

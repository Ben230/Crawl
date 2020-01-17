module.exports = {
  env: {
    GOOGLE_MAPS_API_KEY_CLIENT: process.env.GOOGLE_MAPS_API_KEY_CLIENT,
    GOOGLE_MAPS_API_KEY_SERVER: process.env.GOOGLE_MAPS_API_KEY_SERVER,
    DB_LINK: process.env.DB_LINK,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
  },
  devIndicators: {
  autoPrerender: false,
},
}

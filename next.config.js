const withImages =require('next-images')

module.exports = withImages(
{
  env: {
    GOOGLE_MAPS_API_KEY_CLIENT: process.env.GOOGLE_MAPS_API_KEY_CLIENT,
    GOOGLE_MAPS_API_KEY_SERVER: process.env.GOOGLE_MAPS_API_KEY_SERVER,
  },
}
)



// AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://pararailing-strapi-6op58.ondigitalocean.app'),
  app: {
    keys: env.array('APP_KEYS')
  },
});
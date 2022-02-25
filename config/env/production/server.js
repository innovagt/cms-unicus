module.exports = ({ env }) => ({
  host: env('https://cms-unicus.herokuapp.com/'),
  // port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ["testKey1", "testKey2"]),
  },
});

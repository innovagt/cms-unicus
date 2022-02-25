module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '41ea46b4470625029b8a8844e31144d4'),
  },
});

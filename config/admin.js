module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c80bdafa7f5210f6340c570f3eba2519'),
  },
});

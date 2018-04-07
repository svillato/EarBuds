const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] //set commands see documentation for more accessibility
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/netflix'); //INSERT 'NETFLIX' HTML HERE*********
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); //kills cookie that the id is stored in
    res.redirect('/'); //
  });

  // api route to retrieve current user json
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

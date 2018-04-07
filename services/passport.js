const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id); //mongo instance identifier into an Id to stuff in cookie
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user); // Id in cookie converted back to mongo instance
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      //   console.log('accessToken', accessToken);
      //   console.log('profile', profile);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // We already have a record with the given profile Id
        return done(null, existingUser); // user info retrieved from DB to be serialized
      }
      // We dont have a record with this user ID, make a new record
      const user = await new User({
        googleId: profile.id,
        title: profile.name.givenName
      }).save();
      done(null, user); // user info retrieved from DB to be serialized
    }
  )
);

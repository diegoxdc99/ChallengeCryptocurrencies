const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const userService = require('../services/user');
const { loginError } = require('../helpers/error');

passport.use(
  new BasicStrategy(async (username, password, done) => {
    const user = await userService.getByUsername(username);
    if (!user) return done(loginError(), false);

    const isCorrectPassword = user.correctPassword(password);
    return isCorrectPassword
      ? done(null, user)
      : done(loginError(), false);
  }),
);

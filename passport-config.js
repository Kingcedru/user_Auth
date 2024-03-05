const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

function initialize(passport) {
  const authenticateUsers = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user found with that email" });
    }
    try {
      if (await bcrypt.compare(password, user.passport)) {
        return done(null, user);
      }
    } catch (err) {
      console.log(err);
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }));
  passport.serialziUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}
module.exports = initialize;

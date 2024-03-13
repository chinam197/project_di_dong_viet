const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Provider, User } = require("../models/index");
module.exports = new GoogleStrategy(
  {
    clientID:
      "624103092185-qmec5imlhbr4dgug6l5au3c5uh2eme5u.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3005/auth/google/callback",
    scope: ["email", "profile"],
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, "hello");
    const {
      displayName: name,
      emails: [{ value: email }],
    } = profile;

    const [provider] = await Provider.findOrCreate({
      where: { name: "google" },
      defaults: {
        name: "google",
      },
    });
    const [user] = await User.findOrCreate({
      where: { email, provider_id: provider.id },
      defaults: {
        name,
        email,
        status: true,
        provider_id: provider.id,
      },
    });
    done(null, user);
  }
);

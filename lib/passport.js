const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2-client-password').Strategy;

passport.use(new OAuth2Strategy({
    tokenURL: 'https://suap.ifrn.edu.br/o/token/',
    clientID: '73mZxJiD0Eq5zXbl6TTEE14daa2RYubHzJZaQP87',
    clientSecret: 'hFhgx1YESJBO96clz9SWrrKYDBwZm3H0eMTSGDSpP9ol0t54o3gdj2ljxTt9aTWHBYFfnADeL2D14pOPskCWtfbAj1t7KrFyVBHMRtO2DtqsCQkDShk2QeqJHWUZdLNZ',
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    req.session.accessToken = accessToken;
    return done(null, profile);
}));


const jwt_Strategy = require('passport-jwt').Strategy;
const jwt_ExtractJwt = require('passport-jwt').ExtractJwt;
const users = require('../models/user_model');
const SECRET_KEY = process.env.SECRET_KEY;

const options = {
    secretOrKey: SECRET_KEY
}; 
options.jwtFromRequest = jwt_ExtractJwt.fromAuthHeaderAsBearerToken(); 

module.exports = (passport) => {
    passport.use(
        new jwt_Strategy(options, (jwt_payload, done) => {  
            console.log(jwt_payload);
            users.findById( jwt_payload.User._id)
                .then(user => {
                    if (user) return done(null, user); 
                    done(null, false);
                })
                .catch(err => console.log(err));
        })
    )       
}

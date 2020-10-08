const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'hashsecret';

app.get('/', (req, res) => {
    // if !token render login page,
    // if token render home page,
    jwt.verify(req.cookies.token, secret, (err, verifiedJwt) => {
        if(err){
            console.log(err.message);
            // redirect to home page
        }else{
            console.log(verifiedJwt);
        }
    });
});
app.post('/login', (req, res) => {
    // get user
    // compare client password with encrypted password
    bcrypt.compare(req.password, user.password, (error, same) => {
        if (same) {
            // create a jsonwebtoken containing the user_id & expiration
            // the payload is hashed w/ the secret variable
            const token = jwt.sign({payload: user_id}, secret);
            // render home, {token}
        } else {
            // password incorrect
        }
    });
});
app.post('/register', (reg, res) => {
    // if !user
    // create salt
    bcrypt.genSalt(10, (error, salt) => {
        // hash the password with the salt,
        // the salt also becomes the leading variable
        // --> <salt><hashstring>
        bcrypt.hash(password, salt, (error, hash) => {
            // update password w/ hashed password
            req.body.password = hash;
            // create user
            const token = jwt.sign({payload: user_id}, secret);
            // render home, {token}
        });
    });
});
app.listen(4000, () => {
    console.log("4000")
});
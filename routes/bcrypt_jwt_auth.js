const router = require("express").Router();
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const session = require('express-session')

router
    .route("/")
        .get((req, res) => {
            if (!req.cookies.authToken) {
                res.render(__dirname + "/../views/bcrypt_jwt_auth/login");
            } else {
                jwt.verify(req.cookies.authToken, process.env.TOKEN_SECRET, (error, verifiedJwt) => {
                    if(error){
                        res.send(error.message)
                    }else{
                        Users.findOne({ _id: verifiedJwt._id})
                            .then(user => {
                                res.render(__dirname + "/../views/bcrypt_jwt_auth/home", {"user": user, token: req.cookies.authToken});
                            })
                            .catch(error => console.log(error));
                    }
                });
            }
        })
        .post((req, res) => {
            Users.findOne({ username: req.body.login })
                .then(user1 => {
                    if (!user1) {
                        Users.findOne({ email: req.body.login })
                            .then(user2 => {
                                if (!user2) {
                                    res.send("invalid login");
                                } else {
                                    // email
                                    bcrypt.compare(req.body.password, user2.password)
                                        .then(result => {
                                            if (result) {
                                                const token = jwt.sign({_id: user2._id}, process.env.TOKEN_SECRET);
                                                res.render(__dirname + "/../views/bcrypt_jwt_auth/home", {"user": user2, token});
                                            } else {
                                                res.send("password incorrect")
                                            }
                                        })
                                        .catch(error => console.log(error));
                                }
                            })
                            .catch(error => console.log(error));
                    } else {
                        // username
                        bcrypt.compare(req.body.password, user1.password)
                            .then(result => {
                                if (result) {
                                    const token = jwt.sign({_id: user1._id}, process.env.TOKEN_SECRET);
                                    res.render(__dirname + "/../views/bcrypt_jwt_auth/home", {"user": user1, token});
                                } else {
                                    res.send("password incorrect")
                                }
                            })
                            .catch(error => console.log(error));
                    }
                })
                .catch(error => console.log(error));
        });

router
    .route("/register")
        .get((req, res) => {
            // check token
            res.render(__dirname + "/../views/bcrypt_jwt_auth/register");
        })
        .post((req, res) => {
            // if valid token redirect home

            Users.findOne({ username: req.body.username })
                .then(user1 => {
                    if (!user1) {
                        Users.findOne({ email: req.body.email })
                            .then(user2 => {
                                if (!user2) {
                                    bcrypt.genSalt(10)
                                        .then(salt => {
                                            bcrypt.hash(req.body.password, salt)
                                                .then(hash => {
                                                    req.body.password = hash;
                                                    Users.create(req.body)
                                                        .then(data => {
                                                            res.redirect("/bcrypt_jwt_auth");
                                                        })
                                                        .catch(error => {
                                                            res.json({
                                                                "confirmation": 'fail',
                                                                "message": error.message
                                                            });
                                                        });
                                                })
                                                .catch(error => console.log(error));
                                        })
                                        .catch(error => console.log(error));
                                } else {
                                    res.send("email already exists");
                                }
                            })
                            .catch(error => console.log(error));
                    } else {
                        res.send("username already exists");
                    }
                })
                .catch(error => console.log(error));
        });

module.exports = router;
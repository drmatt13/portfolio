const router = require("express").Router();
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

router
    .route("/")
        .get((req, res) => {
            if (!req.cookies.authToken) {
                res.render(__dirname + "/../views/social/login");
            } else {
                jwt.verify(req.cookies.authToken.split(" ")[0], process.env.TOKEN_SECRET, (error, verifiedJwt) => {
                    if(error){
                        res.render(__dirname + "/../views/social/login");
                    }else{
                        Users.findOne({ _id: verifiedJwt._id})
                            .then(user => {
                                res.render(__dirname + "/../views/social/home", {"user": user, token: req.cookies.authToken});
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
                                                res.render(__dirname + "/../views/social/home", {"user": user2, token});
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
                                    res.render(__dirname + "/../views/social/home", {"user": user1, token});
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
            if (!req.cookies.authToken) {
                res.render(__dirname + "/../views/social/register");
            } else {
                jwt.verify(req.cookies.authToken.split(" ")[0], process.env.TOKEN_SECRET, (error, verifiedJwt) => {
                    if(error){
                        res.render(__dirname + "/../views/social/register");
                    }else{
                        Users.findOne({ _id: verifiedJwt._id})
                            .then(user => {
                                res.redirect('./');
                            })
                            .catch(error => console.log(error));
                    }
                });
            }
        })
        .post((req, res) => {
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
                                                            const token = jwt.sign({_id: data._id}, process.env.TOKEN_SECRET);
                                                            console.log(token);
                                                            res.render(__dirname + "/../views/social/home", {"user": data, token});
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
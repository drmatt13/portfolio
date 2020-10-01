const router = require("express").Router();
const Users = require("../models/userdata");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
    res.send('register');
});

router
    .route('/test')
        .get((req, res) => {
            Users.find()
            .then(data => {
                res.json({
                    "confirmation": 'success',
                    "data": data
                });
            })
            .catch(err => {
                res.json({
                    "confirmation": 'fail',
                    "message": err.message
                });
            });
        })
        .post((req, res) => {
            bcrypt.genSalt(10)
                .then(salt => {
                    bcrypt.hash(req.body.password, salt)
                        .then(hash => {
                            req.body.password = hash;
                            Users.create(req.body)
                                .then(data => {
                                    res.json({
                                        "confirmation": 'success',
                                        "data": data
                                    });
                                })
                                .catch(error => {
                                    res.json({
                                        "confirmation": 'fail',
                                        "message": error.message
                                    });
                                });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => console.log(error))
        });

    router
    .route('/login')
        .post((req, res) => {
            Users.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {
                        res.send("email not found");
                    }
                    bcrypt.compare(req.body.password, user.password)
                        .then(result => {
                            if (result) {
                                const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
                                res.header('auth-token', token)
                                    .json({
                                        "password": user.password,
                                        token
                                    });
                            } else {
                                res.send("password incorrect")
                            }
                        })
                        .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        });

module.exports = router;
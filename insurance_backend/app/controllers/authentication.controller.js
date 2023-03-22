const authentication = require("../models/authentication.js");
const jwt = require('jsonwebtoken');
const jwtConfig = require("../config/jwtConfig.js");

exports.updatePassword = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } else {
        let password = (req.body.password).toString();
        if (password.length > 0) {
            authentication.updatePassword(req.body, (response, err) => {
                if (err) {
                    res.json({ status: "error", data: { msg: err.kind } });
                } else {
                    let data = response;
                    res.status(200).send(data);
                }
            });
        } else {
            res.status(400).send({
                message: "Passowrd can not be empty!"
            });
        }
    }
}

exports.login = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } else {
        let email = (req.body.email).toString();
        let password = (req.body.password).toString();
        if (email.toString() && password.length > 0) {
            let data = {
                "key": "email",
                "value": email
            };
            authentication.findBy(data, (response, err) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({ message: "Enter Valid Credentials" });
                } else {
                    let data = response[0];
                    if (password === data.password) {
                        const payload = {
                            username: data.email
                        };
                        let jwtToken = jwt.sign(payload, jwtConfig.JWT_SECRET);
                        res.status(200).send({
                            username: data.email,
                            accessToken: jwtToken
                        }).end();
                    } else {
                        res.status(400).send({ message: "Enter Valid Credentials" });
                    }
                }
            });
        } else {
            res.status(400).send({
                message: "Passowrd can not be empty!"
            });
        }
    }
}

exports.checkMail = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    let email = (req.body.email).toString();
    let data = {
        "key": "email",
        "value": email
    };
    if (email.length > 0) {
        authentication.findBy(data, (response, err) => {
            if (err) {
                console.log(err);
                res.status(400).send({ message: "No Email Registered, Please use registration option" });
            } else {
                let data = response[0];
                console.log(data);
                if (data === undefined) {
                    res.status(400).send({ message: "No Email Registered, Please use registration option" });
                } else {
                    res.status(200).send({
                        data: data,
                        message: "Please Enter passowrd"
                    }).end();
                }
            }
        });
    } else {
        res.status(400).send({
            message: "Email can not be empty!"
        });
    }
}
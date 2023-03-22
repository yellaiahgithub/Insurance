const customer = require("../models/customer.js");
const authentication = require("../models/authentication.js");

exports.getAllCustomers = (req, res) => {
    customer.getAllData((response, err) => {
        if (err) {
            res.json({ status: "error", data: { msg: err.kind } });
        } else {
            let data = response;
            res.status(200).send(data);
        }
    });
}

exports.getCustomerData = (req, res) => {
    let email = req.query.email;
    let data = {
        key: 'email',
        value: email
    };
    authentication.findBy(data, (response, err) => {
        if (err) {
            res.json({ status: "error", data: { msg: err.kind } });
        } else {
            let data = response[0];
            res.status(200).send(data);
        }
    });
}

exports.insertCustomer = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    customer.insertUser(req.body, (response, err) => {
        if (err) {
            res.status(400).send({ status: "error", data: { msg: err.kind } });
        } else {
            let data = response;
            let authData = {
                "customerId": data.id,
                "email": req.body.email
            };
            authentication.createAuthorization(authData, (response, err) => {
                if (err) {
                    res.status(400).send({ status: "error", data: { msg: err.kind } });
                } else {
                    let authenticationResponse = response;
                    console.log(authenticationResponse);
                    res.status(200).send(data);
                }
            });
        }
    });
}
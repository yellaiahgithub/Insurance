const pool = require("./index.js");

const Customer = function (object) {
    this.id = object.id;
    this.firstname = object.firstname;
    this.lastname = object.lastname;
    this.address = object.address;
    this.age = object.age;
    this.phone = object.phone;
    this.message = object.message;
}

Customer.getAllData = (result) => {
    pool.query("SELECT * FROM customer", (err, res) => {
        if (err) {
            console.log(err);
            result(null, { kind: JSON.stringify(err) });
            return;
        }
        if (res) {
            console.log(res);
            if (res.length) {
                let data = JSON.parse(JSON.stringify(res));
                console.log(data);
                result(data, null);
                return;
            } else {
                result(null, { kind: "No Data Found" });
                return;
            }
        }
        result(null, { kind: "No Data Found" });
    });
};

Customer.insertUser = (newCustomer, result) => {
    let values = {
        "firstname": newCustomer.firstname,
        "lastname": newCustomer.lastname,
        "address": newCustomer.address,
        "age": newCustomer.age,
        "phone": newCustomer.phone,
        "message": newCustomer.message
    };

    pool.query(`INSERT INTO customer SET ? `, values, (err, res) => {
        if (err) {
            console.log(err.stack)
            result(null, { kind: "Unable to insert" });
            return;
        } else {
            newCustomer['id'] = res.insertId;
            console.log("created customer: ", { ...newCustomer });
            result({ ...newCustomer }, null);
            return;
        }
    })
}


module.exports = Customer;
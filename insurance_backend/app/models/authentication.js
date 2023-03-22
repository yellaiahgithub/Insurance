const pool = require("./index.js");

const Authentication = function (object) {
    this.authId = object.authId;
    this.customerId = object.customerId;
    this.email = object.email;
    this.password = object.password;
    this.isPasswordChanged = object.isPasswordChanged;
}

Authentication.createAuthorization = (customerData, result) => {
    let values = {
        "customerId": customerData.customerId,
        "email": customerData.email
    }
    pool.query(`INSERT INTO authentication SET ?`, values, (err, res) => {
        if (err) {
            console.log(err.stack)
            result(null, { kind: "Unable to insert" });
            return;
        } else {
            console.log("created customer authentication: ", { ...customerData });
            result({ ...customerData }, null);
            return;
        }
    })
}

Authentication.updatePassword = (data, result) => {
    let value = {
        "customerId": data.customerId,
        "password": data.password
    }
    let query = `UPDATE authentication SET password = "${value.password}", isPasswordChanged = 1 WHERE customerId = "${value.customerId}"`;
    pool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
            result(null, { kind: "Unable to insert" });
            return;
        } else {
            console.log("Password Updated Successfully");
            result({ "message": "Password Updated Successfully" }, null);
            return;
        }
    })
}

Authentication.findBy = (data, result) => {
    let searchKey = data.key;
    let searchValue = data.value;
    let query = `SELECT * FROM authentication WHERE ${searchKey} = "${searchValue}"`;
    pool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
            result(null, { kind: "Unable to fetch data" });
            return;
        } else {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            result(data, null);
            return;
        }
    })
}


module.exports = Authentication;
module.exports = (app) => {
    const customer = require("../controllers/customer.controller.js");

    app.get("/getCustomers", customer.getAllCustomers);
    app.post("/addCustomer", customer.insertCustomer);
    app.get("/getCustomerData", customer.getCustomerData)
};
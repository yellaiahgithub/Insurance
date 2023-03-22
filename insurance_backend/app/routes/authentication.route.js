module.exports = (app) => {
    const authentication = require("../controllers/authentication.controller");

    app.post("/updatePassword", authentication.updatePassword);
    app.post("/login", authentication.login);
    app.post("/verifyMail", authentication.checkMail);
};
var expressSession = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const dbConnection = require("./app/models/index.js");
var cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({
    limit: '50mb'
}));

app.use(express.urlencoded({
    limit: '50mb'
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(
    expressSession({
        secret: process.env.APP_SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
    }),
    express.urlencoded({
        extended: "true",
    })
);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the ESU Insurance Backend." });
});

//Include created Routes start here
require("./app/routes/customer.route.js")(app);
require("./app/routes/authentication.route.js")(app);
//Include created Routes end here

app.listen(parseInt(process.env.APP_PORT), () => {
    console.log("Server is running on port ", process.env.APP_PORT);
});
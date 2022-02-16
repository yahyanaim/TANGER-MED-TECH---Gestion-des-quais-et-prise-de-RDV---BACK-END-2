const express = require('express');
const config = require("config");
require('dotenv').config();

const port = process.env.PORT || 3000
const app = express();


// connect Db
const connectDB = require("./config/db");
const mongoURI = config.get("mongoURI");

//body parser
app.use(express.json());

const v1 = require('./routers/v1');

app.use("/api/v1", v1);



connectDB();
app.listen(port, console.log(`App Running on http://localhost:${port }`));
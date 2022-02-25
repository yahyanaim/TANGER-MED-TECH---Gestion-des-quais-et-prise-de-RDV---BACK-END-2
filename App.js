const express = require('express');
const config = require("config");

require('dotenv').config();

const port = process.env.PORT || 3000
const app = express();

// connect Db
const connectDB = require("./config/db");
const mongoURI = config.get("mongoURI");

//body parser (our server is ging to be sending and reciving JSON fils)
app.use(express.json());

// requiring file routers
const v1 = require('./routers/v1');

// using file routers (when sameone goes to the path /blabla/ it will load everithing in v1 routers )
app.use("/api/v1", v1);

connectDB();
app.listen(port, console.log(`App Running on http://localhost:${port }`));
require("dotenv").config({ path: `${__dirname}/../.env` });
const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

// * para o express identificar parametros via url e json
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use(express.static(`${__dirname}/../public`));

//* Routes
app.use("/monitor", require("./routes/teste"));
module.exports = app;

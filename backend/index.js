// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
var cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
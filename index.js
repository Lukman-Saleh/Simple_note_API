const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { testConnection } = require("./database/db.js");
const router = require("./router/index.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Running at http://localhost:${process.env.APP_PORT}`);
});

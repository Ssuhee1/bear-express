const express = require("express");
const product = require("./api/product");
const app = express();
const port = process.env.PORT || 3000;

app.use("/api/product", product);

app.listen(port, () => console.log("server is running ", port));

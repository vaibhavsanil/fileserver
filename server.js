const express = require("express");
const fs = require("fs");
const path = require("path");
const config = require("./config/index");

const fserver = require("./routes/api/fileserver");

const app = express();

//Body Parser Middleware
//app.use(express.json({ extended: false }));

// Use Routes
app.use("/api/fs/", fserver);

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);

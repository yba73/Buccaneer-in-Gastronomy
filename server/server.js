const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./config/connectDB");

//Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.listen(process.env.PORT, () =>
  console.log("listening on port ", process.env.PORT)
);

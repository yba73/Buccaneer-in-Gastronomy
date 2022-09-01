const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

app.use(express.json());
require("dotenv").config();
require("./config/connectDB");

//Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.listen(process.env.PORT, () =>
  console.log("listening on port ", process.env.PORT)
);

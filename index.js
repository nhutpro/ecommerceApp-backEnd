const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.js");
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then((message) => {
    console.log("connect database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log("Backend server is running!");
});

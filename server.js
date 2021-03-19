const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Public
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/populate", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(apiRoutes, htmlRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}!`);
});

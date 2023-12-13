const express = require("express");
const dotenv = require("dotenv");
const req = require("express/lib/request");
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const dbConn = require("./config/db");
const errorHandler = require("./middleware/error");
//env vars
dotenv.config({ path: "./config/config.env" });

//Connect to db

const connect = dbConn();

//Route files
const bootcamps = require("./routes/bootcamps");
const recipes = require("./routes/recipes");
const videos = require("./routes/videos");
const auth = require("./routes/auth");
var PORT = process.env.PORT || 5000;

var app = express();
app.use(express.json());

app.use(cookieparser());
if (process.env.NODE_ENV === "developement") {
  // app.use(logger);
  app.use(morgan("dev"));
}

//Mount routes
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/recipes", recipes);
app.use("/api/v1/videos", videos);
app.use("/api/v1/auth", auth);
//Custom errorhandler
app.use(errorHandler);

jsonData = [
  { id: 1, text: "Bootcamp 1" },
  { id: 2, text: "Bootcamp 2" },
  { id: 3, text: "Bootcamp 3" },
];

const server = app.listen(PORT, () => {
  console.log(
    `Server started in environment = ${process.env.NODE_ENV} on port ${PORT}`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error unhandled: ${err.message}`);
  server.close(() => process.exit(1));
});

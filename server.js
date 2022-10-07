const express = require("express");
const dotenv = require("dotenv");
const UserRoutes = require("./routes/user.routes");
const { connect } = require("./config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");

dotenv.config({ path: "./config/private.env" });

connect(process.env.URI);

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", UserRoutes);

const PORT = 9000;

app.listen(process.env.PORT, () => {
  console.log(`App Is Running On PORT:${PORT}`);
});

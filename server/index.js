const express = require("express")
const app = express();


const database = require("./config/database");
const userRoute = require("./routers/auth")
const profileRoutes = require("./routers/education")

const dotenv = require("dotenv");
dotenv.config();


const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { cloudnairyconnect } = require("./config/cloud");
cloudnairyconnect();

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
database.connect();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  
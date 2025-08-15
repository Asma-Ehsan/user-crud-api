require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Sync Database & Start Server
sequelize.sync().then(() => {
  console.log("Database connected & synced");
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
}).catch(err => console.log("Error: " + err));

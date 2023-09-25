const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoutes");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 3000 || process.env.PORT;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Task Managment App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

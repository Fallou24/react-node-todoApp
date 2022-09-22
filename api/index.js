const express = require("express")
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors")

try {
    mongoose.connect("mongodb://localhost:27017/task-db")
    console.log("Connected");
} catch (err) {
    console.log(err);
}

app.use(cors())
app.use(bodyParser.json())
app.use("/api",taskRoutes)
app.listen(8080)
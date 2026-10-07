const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const loginRoutes = require("./Login");

console.log("LOGIN ROUTES LOADED");

app.use("/api/auth", loginRoutes);

const signupRoutes = require("./Signup");

console.log("SIGNUP ROUTES LOADED");

app.use("/api/auth", signupRoutes);

const projectsRoutes = require("./Projects");

app.use("/api/projects", projectsRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running");
});

const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

server.on("error", (err) => {
    console.error("SERVER ERROR:", err);
});

process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED REJECTION:", err);
});
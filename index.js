const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Git  Welcome to your first Node.js app on AWS 🚀");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

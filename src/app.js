const express = require('express');
const app = express();

app.use("/test",(req,res) => {
    res.send("this is test path");
})
app.use("/home",(req,res) => {
    res.send("this is home");
})
app.use("/",(req,res) => {
    res.send("this is normal path");
})
app.listen(4000,() => {
    console.log("server created on port 6000");
})

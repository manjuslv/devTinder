const express = require('express');
const app = express();


app.get('/users',(req,res) => {
    res.send({firstName: "manju",lastName: 'S'})
})
app.post('/users',(req,res) => {
    res.send("data successfully saved to database")
})
app.delete('/users',(req,res) => {
    res.send("data deleted from database")
})
app.use("/test",(req,res) => {
    res.send("this is test path");
})

app.listen(4000,() => {
    console.log("server created on port 6000");
})

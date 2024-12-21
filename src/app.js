const express = require('express');
const {connectDB} = require('./config/database');
const app = express();
const {adminAuth} = require('./middleware/adminAuth')
const User = require('./models/user')

app.post("/signUp",async (req,res) => {
    const userObj = {
        firstName: 'yajna',
        lastName: 'shetty',
        email: 'yajna@gmail.com',
        password: '123456'
    }
    const user = new User(userObj);
    try {
        await user.save();
        res.send('user saved to database successfully');
    }
    catch(err) {
        res.status(404).send("some errro",err.message)
    }
})

connectDB()
.then(() => {
    console.log('connected to database');
    
    app.listen(4000,() => {
        console.log("server created on port 6000");
    })
})
.catch(() => {
    console.log('failed to connect database')
})
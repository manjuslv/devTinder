const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://manjuslv18:P1S7rpR1Kh0ERWTJ@namastenode.zre4n.mongodb.net/devTinder")
}

module.exports = {connectDB}

const mongoose = require("mongoose")

const connectDB = () =>
{
    mongoose.connect(process.env.MONGO_DB)

    console.log(`Mongo DB connected Successfully`)
}

module.exports = connectDB
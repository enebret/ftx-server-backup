require('dotenv').config();
const mongoose = require ('mongoose');
const mongoURI = process.env.mongoURI;
const connectDb = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(mongoURI, {useNewUrlParser: true,});
        console.log('connected to mongoatlas database server...')
    } catch (error) {
        console.log(error)
    }
};
module.exports = connectDb
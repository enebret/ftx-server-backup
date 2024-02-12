require('dotenv').config();
const mongoose = require ('mongoose');
const mongoURI = process.env.mongoURI;
const connectDb = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb+srv://ene_db:ene_db@cluster0.b5aptjw.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true,});
        console.log('connected to mongoatlas database server...')
    } catch (error) {
        console.log(error)
    }
};
module.exports = connectDb
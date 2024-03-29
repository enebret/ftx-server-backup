const express = require ('express');
const app = express();
const request = require ('supertest')
const port = process.env.PORT||5045;
const cors = require ('cors')
const userRoutes = require('./routes/routes.js');
app.use(cors());
app.use('/user', userRoutes);

app.listen(port, ()=>{
    console.log(`app lsitening at ${port}`)
})
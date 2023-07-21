const express = require ('express');
const app = express();
const request = require ('supertest')
const port = 5045;
const cors = require ('cors')
const userRoutes = require('./routes/routes.js');
app.use('/user', userRoutes);

app.listen(port, ()=>{
    console.log(`app lsitening at ${port}`)
})
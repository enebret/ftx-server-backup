const express = require ('express');
const app = express();
const request = require ('supertest')
const port = 5045;
const cors = require ('cors')

app.use('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
app.use('/signup', (req,res, next)=>{
    console.log('Time user signed up: ', Date.now());
    res.end('should be the signup page where user data is stored to the remote db, balance should be added to the schema and model and and if null should be equal to 0, and client is page is rerouted to dashboard. server should populate response object with user informaton like username, bal = 0, profit earned = 0; ensure to include the withdraw and deposit buttons in the dashboard')
});
app.use('/login', (req, res)=>{
    console.log('Time user logged in: ', Date.now());
    res.send('should authenticate user data login details first then send send a response user-athenticated message, alognside json data extracted from the database about the user, then redirect the user on the frontend to the user-dashboard')
})
app.get('/', (req, res)=>{
    res.send('this is meant to be the home page')
})

app.listen(port, ()=>{
    console.log(`app lsitening at ${port}`)
})
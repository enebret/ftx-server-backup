const express = require ('express');
const userRouter = express.Router();
const database = require ('../DbConnect.js');
const User = require('../models/userModel.js')
userRouter.use(express.json());
database();
userRouter.get('/', (req, res)=>{
    res.send('this is meant to be the home page')
})

userRouter.get('/login', (req, res)=>{
    console.log('Time user logged in: ', Date.now());
    res.send('should authenticate user data login details first then send send a response user-athenticated message, alognside json data extracted from the database about the user, then redirect the user on the frontend to the user-dashboard')
})

userRouter.post('/signup', (req, res)=>{
    var userDetails = req.body;
    var userEmail = req.body.email;
    User.findOne({email:userEmail})
    .then(user=>{
        if(user){
            res.send('this email is an existing user email or you are already a registered user.Kindly enter your email and password to login into your dashboard')
        } else {
            User.create(userDetails)
            .then(()=>{
                res.json(userDetails);
                console.log('new user has been added to the atlas database')
            })
        }
    })
    
    
    .catch(error=>console.log(error))
    //res.send('user is redirected to dashboard')
    //update
})

userRouter.post('/signin', (req, res)=>{
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    User.findOne({email:userEmail})
    .then(user=>{
        if(user) {
            var userData = user;
            //res.send('existing user found');
            if(user.password==userPassword){
                res.json(userData);
                console.log(userData)
            } else if(user.password!==userPassword){
                res.send ('incorrect user password, try again')
            }
        } else {
            res.send('not a registered user')
        }
    })
   
})

module.exports = userRouter;
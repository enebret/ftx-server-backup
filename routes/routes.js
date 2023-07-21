const express = require ('express');
const userRouter = express.Router();
userRouter.use(express.json())
userRouter.get('/', (req, res)=>{
    res.send('this is meant to be the home page')
})

userRouter.get('/login', (req, res)=>{
    console.log('Time user logged in: ', Date.now());
    res.send('should authenticate user data login details first then send send a response user-athenticated message, alognside json data extracted from the database about the user, then redirect the user on the frontend to the user-dashboard')
})

userRouter.post('/signup', (req, res)=>{
    console.log(req.body)
    res.send('user is redirected to dashboard')
})

userRouter.post('/signin', (req, res)=>{
    console.log(req.body);
    res.send('user is signed-in')
})

module.exports = userRouter;
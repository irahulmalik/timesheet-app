const express = require('express');
const bodyParser = require('body-parser');
// const { checkUser } = require('../check-user.routes');
const router = express.Router();
// const { User } = require('../User-db');

router.get('/',function(req, res){
    res.send("FROM API")
})
router.post('/login',(req,res) =>{
    
    console.log('Hey from login')
})


router.post('/register', (req,res) =>{
    let userData = req.body
    let user = User(userData)
    

})
module.exports= router
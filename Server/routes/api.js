const express = require('express');
const bodyParser = require('body-parser');
// const { checkUser } = require('../check-user.routes');
const router = express.Router();
// const { User } = require('../User-db');

router.get('/',function(req, res){
    res.send("FROM API")
})
router.post('/login',(req,res) =>{
    res.status(200).send("hey")
    console.log('Hey from login')
})


router.post('/register', (req,res) =>{
    let userData = req.body
    let user = userData
    

})
module.exports= router
const express = require('express');
const router = express.Router();
const {body}=require('express-validation');
const userController=require('../controllers/userController');


router.post('/register',[
     body('email').isEmail(),
     body('password').isLength({min:6}).withMessage('password must be 6 character long'),
     body('fullname.firstname').islength({min:3}).withMessage('first name must be at least 3 characters long')],
     (req,res)=>{
});
module.exports = router;
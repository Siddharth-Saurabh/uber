const dotenv=require('dotenv');
dotenv.config();

const express = require('express');
const app=express();
const cors=require('cors');
const connectToDb=require('./db/db');
app.use(cors());
const  userRoutes=require('./routes/userRoutes');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users',userRoutes);

connectToDb();

app.get('/',(req,res)=>{
    res.send('hello');
})

module.exports=app;
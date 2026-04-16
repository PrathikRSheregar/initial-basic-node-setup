const express=require('express');
const {infocontroller} = require('../../controllers');
const routes=express.Router();
routes.get('/info',infocontroller);
module.exports=routes

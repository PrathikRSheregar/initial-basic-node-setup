const express=require('express');
const {infocontroller} = require('../../controllers');
const router=express.Router();
router.get('/info',infocontroller);
module.exports=router

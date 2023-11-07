const express=require('express')
const { signin } = require('../controllers/authcontrollers')
const router=express.Router()

router.get("/",signin)
module.exports=router
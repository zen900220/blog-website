const express = require('express');
const ejs = require('ejs');

const router=express.Router();

router.get("/",function(req,res){
  res.render("contact");
})

module.exports=router;

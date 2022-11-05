const express = require('express');
const ejs = require('ejs');
const db = require('../database/dbFunctions.js');

const router=express.Router();

router.get("/",function(req,res){
  res.render("compose");
});

router.post("/",function(req,res){
  db.insertToCol(req.body).then((err)=>{
    if(err==="repetition error"){
      res.send("Unique title name needed!");
    }else{
      res.render("compose");
    }
  })
});

module.exports=router;

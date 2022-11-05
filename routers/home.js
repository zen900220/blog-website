const express = require('express');
const ejs = require('ejs');
const db = require('../database/dbFunctions.js');

const router=express.Router();

router.get("/",function(req,res) {
  db.readAllFromCol().then((blogs)=>{
    res.render("home",{blogs:blogs});
  })
});


module.exports=router;

const express = require('express');
const ejs = require('ejs');
const db = require('../database/dbFunctions.js');

//mergeParams makes sure that the params from the parent router are transferred over
//to the childe router.
//here postName is being transferred over unchanged frm the parent.

const router=express.Router({mergeParams:true});

router.get("/",function(req,res){
  db.readFromCol(req.params.postName).then((blog)=>{
    res.render("posts",{title:blog.title,content:blog.content});
  })
});

router.post("/",function(req,res){
  db.deleteFromCol(req.params.postName).then(()=>{
    res.redirect("/")
  })
})

module.exports=router;

//Write all the functions responsible for interacting with DB
const express = require('express');
const mongoose = require('mongoose');
const schema = require('./mongooseSchema.js')

const blogModel=mongoose.model("Blog",schema.blogSchema);

async function connect(uri){
  await mongoose.connect(uri).then(()=>{
    console.log("Successfully connected to db");
  })
}

async function readAllFromCol(){
  let blogs=await blogModel.find({})
  return blogs;
}

async function readFromCol(title){
  let blog=await blogModel.find({title:title});
  return blog[0];
}

async function insertToCol(blog){
  try {
    newBlog=await new blogModel({
      title:blog.title,
      content:blog.content
    });
    await newBlog.save();
  } catch (e) {
    return "repetition error";
  }
}

async function deleteFromCol(title){
  await blogModel.deleteOne({title:title});
}

//exports

module.exports.connect=connect;
module.exports.readAllFromCol=readAllFromCol;
module.exports.readFromCol=readFromCol;
module.exports.insertToCol=insertToCol;
module.exports.deleteFromCol=deleteFromCol;

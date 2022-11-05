//Write all the schemas required by mongoose
const express = require('express');
const mongoose = require('mongoose');

const blogSchema=new mongoose.Schema({
  title:{type:String,unique:true},
  content:String
})

module.exports.blogSchema=blogSchema;

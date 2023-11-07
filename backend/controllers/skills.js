// /controllers/people.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Skills} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller


///////////////////////////////
// CONTROLLERS
////////////////////////////////

// INDEX ACTION
async function index(req,res,next) {
	try {
    // get all people
    res.json(await Skills.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Skills.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Skills.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete people by ID
      res.json(await Skills.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update people by ID, provide the form data, and return the updated document.
      res.json(
        await Skills.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show, 
    delete: destroy, 
    update
}

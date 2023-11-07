// ./routes/people.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const skillsCtrl = require('../controllers/skills')

///////////////////////////////
// ROUTES
////////////////////////////////

// INDEX ROUTE
router.get("/", skillsCtrl.index);

// CREATE ROUTE
router.post("/", skillsCtrl.create);

// SHOW ROUTE
router.get("/:id", skillsCtrl.show);

// DELETE ROUTE
router.delete("/:id", skillsCtrl.delete);

// UPDATE ROUTE
router.put("/:id", skillsCtrl.update);



module.exports = router


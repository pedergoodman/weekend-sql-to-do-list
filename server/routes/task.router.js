const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool')





// GET route to grab and return tasklist


// POST route to add task to server


// DELETE route to remove task from server

// PUT route to toggle completed status
// PUT route to toggle completed date (same route?)
  // how do we clear the date if 'unchecking' a task?


// (optional) PUT route to update 'Due date'
  // clear
  // add / change


module.exports = taskRouter;



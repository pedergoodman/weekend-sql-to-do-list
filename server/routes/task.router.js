const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool')





// GET route to grab and return tasklist
taskRouter.get('/', (req, res) => {
  console.log('in taskRouter GET');

  let queryText = `SELECT * FROM "task-list"`

  pool.query(queryText)
        .then((result) => {
            // send table row data
            res.send(result.rows)
        }).catch((err) => {
            // error if trouble getting koala list
            console.log('Error getting task list', err);
            res.sendStatus(500)
        });
})



// POST route to add task to server
taskRouter.post('/', (req, res) => {
  console.log('in taskRouter POST');

// TODO - grab data from server
  let taskText = req.body.text;
  let taskDueDate = req.body.dueDate;

  const queryText = `
    INSERT INTO "task-list" 
    ("text", "due_date")
    VALUES
    ($1, $2),
  `
  const queryParams = [taskText, taskDueDate]


  pool.query(queryText, queryParams)
        .then((result) => {
            // send created status
            res.sendStatus(201)
        }).catch((err) => {
            // error if trouble getting koala list
            console.log('Error posting to task list', err);
            res.sendStatus(500)
        });
})

// DELETE route to remove task from server
taskRouter.delete('/:id', (req, res) => {
  let idToDelete = req.params.id
  //query text to delete koalas by id and to protect against sql injection
  let queryText = `DELETE FROM "task-list" WHERE id = $1;`
  //connecting with the data base and running our query
  pool.query(queryText, [idToDelete])
      .then((results) => {
          console.log('task deleted!');
          //sending the ok status the the koala 
          res.sendStatus(200)
      }).catch((error) => {
          console.log('error deleteing task from DB', error);
          res.sendStatus(500)
      })
})




// PUT route to toggle completed status
// PUT route to toggle completed date (same route?)
  // how do we clear the date if 'unchecking' a task?
taskRouter.put('/open-task/:id', (req, res) => {
  console.log('in taskRouter PUT');
  const idToUpdate = req.params.id;

  // TODO
  let queryText = `
  UPDATE "task-list" SET "completed_status" = NOT "completed_status" WHERE "id"=$1;
  UPDATE "task-list" SET "completed_date" = now() WHERE "id"=$1;
  `;

  pool.query(queryText, [idToUpdate])
  .then((result) => {
      console.log('Task updated!');
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log('Error making task update request: ', error);
      res.sendStatus(500);
  })

});


taskRouter.put('/closed-task/:id', (req, res) => {
  console.log('in taskRouter PUT');
  const idToUpdate = req.params.id;

  // TODO
  let queryText = `
  UPDATE "task-list" SET "completed_status" = NOT "completed_status" WHERE "id"=$1;
  UPDATE "task-list" SET "completed_date" = NULL WHERE "id"=$1;
  `;

  pool.query(query, [idToUpdate])
  .then((result) => {
      console.log('Task updated!');
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log('Error making task update request: ', error);
      res.sendStatus(500);
  })

});

// (optional) PUT route to update 'Due date'
  // clear
  // add / change


module.exports = taskRouter;



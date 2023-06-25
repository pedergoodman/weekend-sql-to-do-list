//  server-side setup
const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/task.router');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'))


// Connect tasks router
app.use('/tasks', tasksRouter)










// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
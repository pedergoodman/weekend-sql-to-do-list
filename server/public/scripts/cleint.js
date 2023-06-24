$(document).ready(() => {
  console.log('JQ');
  refreshTodoList()
  addClickHandlers()

});

// TODO - Add buttons
function addClickHandlers() {
  // TODO - Submit task (and due date)
  $('#task-submit-btn')

  // TODO - delete task (delegation)

  // TODO - Check/Uncheck open task (delegation)

  // TODO - Button for closed task

  
  
  // TODO (optional) - Update Due Date (delegation)



};

// TODO - packages form submission, sends to addTask
function handleTaskSubmit() {
  console.log("Submit button clicked.");

  let task = {};
  // task.text = 
  // task.dueDate = // 

  console.log('task to post is:', task);


};

// TODO - takes in task from submit, send to server POST
function addTask() {
  // TODO - AJAX POST
}





// TODO - delete a task
function deleteTask() {
  // TODO - grab item id

  // TODO - AJAX DELETE
}




// TODO - handles updating complete status
function updateCompleteStatus() {
  console.log("Complete button clicked.");
  
  // TODO - AJAX PUT
  
};
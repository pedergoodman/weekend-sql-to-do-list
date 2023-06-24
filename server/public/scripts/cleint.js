$(document).ready(() => {
  console.log('JQ');
  getTasks()

    // TODO - Submit task (and due date)
  $('#task-submit-btn').on('click', handleTaskSubmit)

  // TODO - delete task (delegation)
  $('.task-group-body').on('click', '.task-delete-btn', deleteTask)

  // TODO - Check/Uncheck open task (delegation)
  $('.task-group-body').on('click', '.open', updateCompleteStatus)
  $('.task-group-body').on('click', '.closed', updateCompleteStatus)

});




// RENDER 
function renderTaskList(taskList) {
  console.log('in renderer! task list is:', taskList);
  // renderOpenTasks(taskList)
    console.log('in render open tasks');

  // function renderOpenTasks(taskList) {
    for (const task of taskList) {
    //  if(task.completed-status == true) {
  
       console.log('task id is:', task.id);
       console.log('task text is:', task.text);
       console.log('task complete status is:', task.completed_status);
       console.log('task completed date is:', task.completed_date);
       console.log('task due-date is:', task.due_date);
    //  } 
    }
  // }

}


// GET
function getTasks() {
  $.ajax({
    method: 'GET',
    url: '/tasks'
  }).then((response) => {
    
    let taskList = response;
    console.log('task get response is:', response);


    // send to render
    renderTaskList(taskList);

  }).catch((err) => {
    console.log('Error getting task list', err);
    alert('Error getting task list')

  });
}




// SUBMITTING

// TODO - packages form submission, sends to addTask
function handleTaskSubmit() {
  console.log("Submit button clicked.");

  let taskText = $('#taskText').val();
  let taskDueDate = $('#taskDueDate').val();

  let task = {
    text: taskText,
    dueDate: taskDueDate
  };


  addTask(task)

  console.log('task to post is:', task);


};

// TODO - takes in task from submit, send to server POST
function addTask(taskToAdd) {
  console.log("Submit button clicked.");
  // TODO - AJAX POST
  // $.ajax({
  //   method: 'GET',
  //   url: '/tasks'
  // }).then((response) => {
  //   let taskList = response
  //   console.log('get response is:', response);

  //   // send to render
  //   renderTaskList;

  // }).catch((err) => {
  //   console.log('Error getting koala list', err);
  //   alert('Error getting koalas list')

  // });

}




// DELETE
// TODO - delete a task
function deleteTask() {
  console.log("Delete button clicked.");
  // TODO - grab item id

  // TODO - AJAX DELETE
}



// PUT(S)
// TODO - handles updating complete status
function updateCompleteStatus() {
  console.log("Complete button clicked.");
  
  // TODO - AJAX PUT
  
};
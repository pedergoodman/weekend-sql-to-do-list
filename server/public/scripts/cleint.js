$(document).ready(() => {
  console.log('JQ');
  getTasks()

    // TODO - Submit task (and due date)
  $('#task-submit-btn').on('click', handleTaskSubmit)

  // TODO - delete task (delegation)
  $('.task-group-body').on('click', '.task-delete-btn', deleteTask)

  // TODO - Check/Uncheck open task (delegation)
  $('.task-group-body').on('click', '.open', setStatusComplete)
  $('.task-group-body').on('click', '.closed', setStatusOpen)

  $('#display-open-tasks').on('change', '#row-due-date', setDueDate)

});




// RENDER 
function renderTaskList(taskList) {
  console.log('in renderer! task list is:', taskList);
  // renderOpenTasks(taskList)
  // console.log('in render open tasks');
  // renderClosedTasks(taskList)
  $('#display-open-tasks').empty();

    for (const task of taskList) {
      let taskId = task.id;
      let taskText = task.text;
      let taskStatus = task.completed_status;
      let taskCompletedDate = task.completed_date
      let taskDueDate = task.due_date

      let dateToAdd = '';
      let setClass = '';

      // console.log(Date());


      if (taskStatus) {
        dateToAdd = `✅ ${taskCompletedDate}`
        setClass = 'closed'
      } else if (taskDueDate) {
        dateToAdd = `${taskDueDate}`
        setClass = 'open'
      } else {
        dateToAdd = `<input id="row-due-date" type="date">`
        setClass = 'open'
      };


      let taskRow = $(`
        <tr class="task-row" data-id="${taskId}">
          <td class="task-checkbox-btn ${setClass}"><button><img src="images/checkbox-5-64.png" alt="checkbox-5"></button></td>
          <td class="task-text">${taskText}</td>
          <td class="task-date">${dateToAdd}</td>
          <td class="task-delete-btn"><button><img src="images/delete-133-64.png" alt="checkbox-5"></button></td>
        </tr>
        `);

        $('#display-open-tasks').append(taskRow);
    }


}

// render tasks to different tables

// function renderOpenTasks(taskList) {
//   for (const task of taskList) {
//     if(task.completed_status == false) {
//     } 
//   }
// }

// function renderClosedTasks(taskList) {
//   for (const task of taskList) {
//     if(task.completed_status == true) {
//     } 
//   }
// }





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
  console.log(taskToAdd);

  $.ajax({
    method: 'POST',
    url: '/tasks',
    data: taskToAdd
  }).then((response) => {
    console.log('post response is:', response);

    // send to render
    getTasks()

  }).catch((err) => {
    console.log('Error getting task list', err);
    alert('Error getting task list')
  });

}




// DELETE
// TODO - delete a task
function deleteTask() {
  console.log("Delete button clicked.", $(this));
  // TODO - grab item id
  const taskId = $(this).closest("tr").data('id')
  //dom traversal to 'tr'
  console.log('taskId is', taskId);

  // TODO - AJAX DELETE
  
  $.ajax({
    method: 'DELETE',
    url: `/tasks/${taskId}`
  }).then((response) => {
    console.log('deleted task!');
    // refresh tasks
    getTasks();

  }).catch((err) => {
    console.log('Error deleting task', err);
    alert('Error deleting task')

  });
}



// PUT(S)
// Handles updating complete status
function setStatusComplete() {
  console.log("Check button clicked.");
  const taskId = $(this).closest("tr").data('id')

  // TODO - AJAX PUT
  $.ajax({
    method: "PUT",
    url: `/tasks/close-task/${taskId}`
  }).then((response) => {

    console.log('Task completion status updated!')
    getTasks();

  }).catch((error) => {
    console.log('Error in UPDATE request: ', error);
    alert('Error in updating task')
  })
  
};

function setStatusOpen() {
  console.log('in set status open');
  const taskId = $(this).closest("tr").data('id')

  $.ajax({
    method: "PUT",
    url: `/tasks/open-task/${taskId}`
  }).then((response) => {

    console.log('Task completion status updated!')
    getTasks();

  }).catch((error) => {
    console.log('Error in UPDATE request: ', error);
    alert('Error in updating task')
  })
}

function setDueDate() {
  console.log('in change due date');
  const taskId = $(this).closest("tr").data('id')
  let newDueDate = $(this).val();

  console.log('taskId is', taskId);
  console.log('grabbed value is', newDueDate);

  $.ajax({
    method: "PUT",
    url: `/tasks/update-due/${taskId}`,
    data: { updateDueDate: newDueDate }

  }).then((response) => {

    console.log('Task due date updated!')
    getTasks();

  }).catch((error) => {
    console.log('Error in UPDATE due date request: ', error);
    alert('Error in updating task due date')
  })
}
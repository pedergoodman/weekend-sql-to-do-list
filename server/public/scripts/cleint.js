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
  // renderClosedTasks(taskList)
    console.log('in render open tasks');
    for (const task of taskList) {
      let taskId = task.id;
      let taskText = task.text;
      let taskStatus = task.completed_status;
      let taskCompletedDate = task.completed_date
      let taskDueDate = task.due_date

      let dateToAdd = '';
      let setClass = '';

      if (taskStatus) {
        dateToAdd = `✅ ${taskCompletedDate}`
        setClass = 'closed'
      } else {
        dateToAdd = `Due: ${taskDueDate}`
        setClass = 'open'
      }



      let taskRow = $(`
        <tr class="task-row" data-id="${taskId}">
          <td class="task-checkbox-btn ${setClass}"><button><img src="images/checkbox-5-64.png" alt="checkbox-5"></button></td>
          <td class="task-text">${taskText}</td>
          <td class="task-date">${dateToAdd}</td>
          <td class="task-delete-btn"><button><img src="images/delete-133-64.png" alt="checkbox-5"></button></td>
        </tr>
        `);

        console.log(taskRow.data('id'));

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
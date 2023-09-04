document.getElementById('addTaskButtonId').addEventListener('click', () => {
    
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    const taskDescription = document.getElementById('addNotes').value;

    const taskElement = document.createElement('li');
    taskElement.innerHTML = `<p>Task: ${taskName}</p><p>Due Date: ${dueDate}</p><p>Description: ${taskDescription}</p><button class="deleteButton">Delete</button>`;
    taskElement.classList.add('taskBox');

    if (priority === 'high') {
        document.getElementById('highTaskListId').appendChild(taskElement);
    } else if (priority === 'medium') {
        document.getElementById('mediumTaskListId').appendChild(taskElement);
    } else if (priority === 'low') {
        document.getElementById('lowTaskListId').appendChild(taskElement);
    }

    document.getElementById('taskForm').reset();

});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteButton')) {
        
        const taskElement = event.target.parentElement;
        taskElement.remove();
    }
});


document.getElementById('deleteAllButton').addEventListener('click', () => {
    document.getElementById('taskDescription').value = ''
});

document.getElementById('taskDescription').addEventListener('input', () => {
    document.getElementById('taskDescription').rows = Math.ceil(document.getElementById('taskDescription').scrollHeight / 30);
});
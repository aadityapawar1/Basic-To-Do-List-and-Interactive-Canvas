const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-items');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
});
let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  
  if (task !== '') {
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'task';
    listItem.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(listItem);
  });
}

function editTask(index) {
  const newTask = prompt('Edit Task:', tasks[index]);
  
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

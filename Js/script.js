// Riferimenti agli elementi del DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Funzione per aggiungere un nuovo task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Elimina</button>
  `;

  // Aggiungi comportamento al click sul task (completamento)
  listItem.querySelector('span').addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Aggiungi comportamento al bottone di eliminazione
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);
  taskInput.value = '';
});

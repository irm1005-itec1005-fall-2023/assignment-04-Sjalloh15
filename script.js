/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//
let todoItems = [];
// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//

function renderTodos() {
  const todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = ''; // Clear the container

  todoItems.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodoCompleted(todo.id));

    const text = document.createElement('span');
    text.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodoItem(todo.id));

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(text);
    todoDiv.appendChild(deleteButton);

    todoContainer.appendChild(todoDiv);
  });
}
// Functions
function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const newTodo = {
      id: todoItems.length,
      text: todoText,
      completed: false,
    };

    todoItems.push(newTodo);
    todoInput.value = '';
    renderTodos();
  }
}
//

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const newTodo = {
      id: todoItems.length,
      text: todoText,
      completed: false,
    };

    todoItems.push(newTodo);
    todoInput.value = '';
    renderTodos();
  }
}


function toggleTodoCompleted(todoId) {
  const todo = todoItems.find(todo => todo.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
}


function deleteTodoItem(todoId) {
  todoItems = todoItems.filter(todo => todo.id !== todoId);
  renderTodos();
}

renderTodos();
// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();
const showToDoBtn = document.querySelector('.to-do-btn');
showToDoBtn.addEventListener('click', () => {
  const container = document.querySelector('.to-do__container');
  container.classList.toggle('top_inactive');
  showToDoBtn.classList.toggle('top_inactive');
})

let todoItems = [];

const list = document.querySelector('.to-do__list');
function renderTodo(todoItem) {
  localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));
  const item = document.querySelector(`[data-key='${todoItem.id}']`);
  if (todoItem.deleted) {
    item.remove();
    return;
  }
  const isChecked = todoItem.checked ? 'done' : '';
  const node = document.createElement('li');
  node.setAttribute('class', `to-do__item ${isChecked}`);
  node.setAttribute('data-key', todoItem.id);
  node.innerHTML = `
  <input id="${todoItem.id}" type="checkbox" class="to-do__checkbox">
    <label for="${todoItem.id}" class="to-do-item__tick"></label>
    <span class="to-do-item__text">${todoItem.text}</span>
    <button class="to-do-item__del"></button>
  `;
  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
  const todoItem = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todoItem);
  renderTodo(todoItem);
}

const form = document.querySelector('.to-do__form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.to-do__input');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
})

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('to-do-item__tick')) {
    const itemKey = e.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (e.target.classList.contains('to-do-item__del')) {
    const itemKey = e.target.parentElement.dataset.key;
    deleteItem(itemKey);
  }
})

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === +key);
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteItem(key) {
  const index = todoItems.findIndex(item => item.id === +key);
  const deletedItem = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== +key);
  renderTodo(deletedItem);
}
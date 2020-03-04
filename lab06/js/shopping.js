//(() => {

  "use strict";

  /* CONST DOM ELEMENTS */
  const listElement = document.getElementById('shopping');
  const newItem = document.getElementById('newItem');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');
  const reloadBtn = document.getElementById('reloadBtn');

  /* BUTTON EVENT LISTENERS */
  addBtn.addEventListener('click', ev => {
    newItem.value.split(',').forEach(v => {
      if(v) {
        addItem(v);
      }
    });
    newItem.value = null;
  });

  clearBtn.addEventListener('click', ev => {
    clearList();
  });

  reloadBtn.addEventListener('click', ev => {
    location.reload(true);
  });

  newItem.addEventListener("keyup", ev => {
    if(ev.key === "Enter") {
      addBtn.click();
    }
  });

  /* WINDOW EVENT LISTENERS */
  window.addEventListener('beforeunload', ev => {
    const items = [...listElement.childNodes]; // 3 dots = spread operator
    if(items.length) {
      const list = items.map(item => {
        return item.textContent.slice(0, -1);
      });
      localStorage.setItem('shopping-list', list);
    } else {
      localStorage.removeItem('shopping-list');
    }
  });

  window.addEventListener('DOMContentLoaded', ev => {
    const shoppingList = localStorage.getItem('shopping-list');
    if(shoppingList){
      renderList(shoppingList.split(','));
    }
  });


  /* WEB APP FUNCTIONS */
  const itemList = ['rice', 'pasta', 'eggs', 'cheese', 'milk'];

  function addItem(item) {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    itemElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', ev => {
      listElement.removeChild(itemElement);
    });

    listElement.appendChild(itemElement);
  }

  function renderList(itemList) {
    itemList.forEach(item => {
      addItem(item);
    });
  }

  // inefficient way to clear the list
  /*function clearList() {
    listElement.innerHTML = ""
  }*/

  // more efficient way to clear list
  function clearList() {
    while(listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }

//})()

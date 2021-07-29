//DOm elelments
const input = $('#input');
const add = $('#add');
const complete = $('#complete');
const clear = $('#clear');
const todoList = $('#todo-list')
const todo = $('.todo')
const commpleteTask = $('.complete-todo')
const todoClass = todo.attr('class')


//Event Functions ====================================================

//add to do list items================================================
function addNewTodo() {
    const newTodo = $(`<li class = 'todo-item'> ${input.val()} </li>`)
    newTodo.addClass('todo')
    todoList.append(newTodo);
     newTodo.click(completeTodo)
}

//complete todo list items
function completeTodo(){
this.classList.toggle('complete-todo');
}

//======================================================================
//=========/TODO: add complete delete button to li instead/=============
//======================================================================
// function completeDelete () {
//     todoList.each((el) => {
//   if (el.hasCLass('complete-todo) === true) {
//       el.remove();
//   }})
// }

function removeAll () {
todoList.html('')
}

add.click(addNewTodo)
// complete.click(completeDelete)
clear.click(removeAll)
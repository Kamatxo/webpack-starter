// import { Todo } from './todo.class.js';
import './styles.css';

// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);


// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('my-key', 'ABCD1234');
// sessionStorage.setItem('my-key', '23456trew');

// setTimeout(()=>{
//     localStorage.removeItem('my-key');
// }, 5500);
todoList.todos[1].imprimirClase();
todoList.todos.forEach( todo => { crearTodoHtml( todo );
    console.log('todos', todoList.todos);
    
});
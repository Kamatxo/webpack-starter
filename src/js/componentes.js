
// import '../css/componentes.css';
// // import webpacklogo from '../assets/img/webpack-logo.png';

import { Todo } from "../class";
import { todoList } from "../index";

// export const saludar = (nombre) =>{

//     console.log('Creando etiqueta h1');

//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola, ${ nombre}`;

//     document.body.append(h1);

//     // //img
//     // const img = document.createElement('img');
//     // img.src = webpacklogo;
//     // document.body.append(img);
// }

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) => {

    const todoHtml = `
     <li class="${ (todo.completado)?'completed':''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    `;

    const div = document.createElement('div');

    div.innerHTML = todoHtml;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo( nuevoTodo );
        // console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
    
});

divTodoList.addEventListener('click', (event =>{
    const nombreElemento = event.target.localName;//input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoId);
    if( nombreElemento.includes('input')){ //clic en el check

        todoList.marcarCompleto( todoId );
        todoElemento.classList.toggle('completed');

    }else if (nombreElemento.includes('button')){ //click en el X eliminar

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }

}));

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i >= 0 ; i--){
        const elemento = divTodoList.children[i];
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) =>{

    const filtro = event.target.text;
    if(!filtro) return;

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;
        
            default:
                break;
        }
    }

});
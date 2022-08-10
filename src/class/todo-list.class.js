import { Todo } from "./todo.class";

export class TodoList{

    constructor (){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorege();
    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorege();

    }

    marcarCompleto( id ){

        for(const todo of this.todos){
            console.log(id, todo.id);

            if( id == todo.id){
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocalStorege();
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorege();

    }

    guardarLocalStorege(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        // if(localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargarLocal: ',this.todos);

        // }else{

        //     this.todos = [];

        // }

        this.todos = (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')): [];

        this.todos = this.todos.map( obj => Todo.fromJSON( obj ));
    }
    
}
import { AppState } from "../AppState.js";
import { todoservice } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawToDosList() {
    console.log('todo draw function');
    let tasks = AppState.todos
    let content = ``
    tasks.forEach(task => content = task.listTemplate)
    setHTML('todoList', content)
}
// function _drawActiveToDos() {
//     console.log('todo draw function');
//     let task = AppState.activeTodo
//     setHTML('todoList', task.listTemplate)
// }

export class ToDoController {
    constructor() {
        console.log('Todo controller up');
        AppState.on('account', this.getToDos)
        // this.getToDos()
        AppState.on('todos', _drawToDosList)
    }



    async getToDos() {
        try {
            await todoservice.getToDos()
        } catch (error) {
            Pop.error(error)
        }
    }
}
import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "../services/AxiosService.js";
import { todoservice } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js"

function _drawToDosList() {
    console.log('todo draw function');
    let tasks = AppState.todos
    let content = ``
    let todosLeft
    tasks.forEach(task => content += task.listTemplate)
    tasks.forEach(task => {
        if (!task.completed) {
            todosLeft++
        }
    })
    // setHTML('todoButton', ToDo.todosCount(todosLeft))
    setHTML('todoList', content)
}

// Never used, so commented out

// function _drawActiveToDos() {
//     console.log('todo draw function');
//     let task = AppState.activeTodo
//     setHTML('todoList', task.listTemplate)
// }

export class ToDoController {
    constructor() {
        console.log('Todo controller up');
        // debugger
        AppState.on('account', this.getToDos)
        AppState.on('account', _drawToDosList)
        AppState.on('todos', _drawToDosList)
        // console.log('problematic still todo', this.getToDos);
        // this.getToDos()
    }



    async getToDos() {
        try {
            await todoservice.getToDos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createToDo() {
        try {
            window.event.preventDefault()
            // console.log("submitted");
            const form = window.event.target
            const formData = getFormData(form)
            // console.log('form data', todoData)
            await todoservice.createToDo(formData)

            // @ts-ignore
            form.reset()


        } catch (error) {
            console.error(error);
            Pop.error(error.message)
        }
    }

    async deleteToDo(todoId) {
        try {
            if (await Pop.confirm("finished?")) {
                await todoservice.deleteToDo(todoId)
            }
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async toggleCheck(todoId) {
        try {
            await todoservice.toggleCheck(todoId)
        } catch (error) {
            Pop.error(error.message)
        }
    }

}

    // async createToDo(event) {
    //     try {
    //         window.event.preventDefault()
    //         const form = window.event.target
    //         console.log('new task', form)

    //         // @ts-ignore
    //         const todoData = getFormData(form)
    //         await todoservice.createToDo(todoData)
    //         // @ts-ignore
    //         form.reset()
    //     } catch (error) {
    //         Pop.error(error)
    //         console.error(error);
    //     }

    //     // @ts-ignore   <-- similar issue on last project
    //     _drawToDosList()
    // }

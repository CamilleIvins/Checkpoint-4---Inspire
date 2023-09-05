import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"




// this is where we will look at Spells and Jot

class ToDoService {
    async setActiveToDo(todoId) {
        let task = AppState.todos.find(todo => todo.id == todoId)
        const res = await api.get(`api/todos/${todoId}`)
        AppState.activeTodo = task
    }

    async toggleCheck(todoId) {
        let targetTask = AppState.todos.find(todo => todo.id == todoId)
        AppState.activeTodo = targetTask
        if (targetTask.completed == false) {
            debugger
            targetTask.completed = true
            AppState.emit('activeTodo')
            const res = await api.put(`api/todos/${todoId}`)
            console.log('mark completed', res.data);
        }
        //  else if (targetTask.completed == true) {
        //     targetTask.completed = false
        //     AppState.emit('activeTodo')
        //     const res = await api.put(`api/todos/${todoId}`)
        // }
        // use the back-ticks, or else it will not(⬇️BLUE) run appropriately
    }

    // async toggleCheck(todoId) {
    //     let targetTask = AppState.todos.find(todo => todo.id == todoId)
    //     AppState.activeTodo = targetTask
    //     if (targetTask.completed == false) {
    //         targetTask.completed = true
    //         AppState.emit('todos')
    //     } else if (targetTask.completed == true) {
    //         targetTask.completed = false
    //         AppState.emit('todos')
    //     }
    // }


    async createToDo(formData) {
        const res = await api.post('api/todos', formData)
        const newTask = new ToDo(res.data)
        AppState.todos.push(newTask)
        AppState.emit('todos')


    }
    // NASA lecture, unapologetically copy format

    async getToDos() {
        const res = await api.get('/api/todos')
        console.log('res todo data', res.data)
        const newTask = res.data.map(t => new ToDo(t))
        AppState.todos = newTask
        console.log('testing todo get', newTask);
    }
    async deleteToDo(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        console.log('delete', res.data);

        AppState.todos = AppState.todos.filter(todo => todo.id != todoId)
    }

}

export const todoservice = new ToDoService()
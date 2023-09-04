import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"



// this is where we will look at Spells and Jot

class ToDoService {

    // async createToDo(formData) {
    //     const res = await api.post('api/todos', formData)
    //     const newTask = new ToDo(res.data)
    //     AppState.todos.push(newTask)
    //     AppState.emit('todos')


    // }

    async getToDos() {
        const res = await api.get('/api/todos')
        console.log('res todo data', res.data)
        const newTask = res.data.map(t => new ToDo(t))
        AppState.todos = newTask
        // console.log('testing todo get', AppState.todos);
    }


}

export const todoservice = new ToDoService()
import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"
api
AppState

// this is where we will look at Spells and Jot

class ToDoService {
    async getToDos() {
        const res = await api.get('api/todos')
        console.log('res todo data', res.data)
        AppState.activeTodo = new ToDo(res.data)
        console.log('testing todo get', AppState.activeTodo);
    }

}

export const todoservice = new ToDoService()
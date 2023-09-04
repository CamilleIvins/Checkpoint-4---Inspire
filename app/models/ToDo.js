import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";


export class ToDo {
    constructor(data) {
        console.log('todo constructor');
        this.completed = data.completed || false
        this.description = data.description
        this.creatorId = data.creatorId || generateId()

    }


    get listTemplate() {
        if (!AppState.account) {
            return
        }
        return /*html*/ `
        <div class="card col-md-2 col-6">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            ${this.description}
            </label>
        </div>
        `
    }

    static ToDoListTemplate(todo) {
        return /*html*/ `
        <p>
       <span><input type="checkbox" ></span> ${todo.description}
        </p>
        `
    }
}
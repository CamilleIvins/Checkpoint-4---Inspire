import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";


export class ToDo {
    constructor(data) {
        console.log('todo constructor');
        this.completed = data.completed || false
        this.description = data.description
        this.creatorId = data.creatorId || generateId()
        this.id = data.id || generateId()

    }

    // look at SPELLBOOK lecture
    get listTemplate() {
        if (!AppState.account) {
            return
        }
        return /*html*/ `
        <section class="row justify-content-between">
        <div class="my-2 pe-0 col-9">
           ${this.toggledCheck}
            <label class="form-check-label" for="flexCheckDefault">
           <span class="fw-bold p-1"> ${this.description} </span>
           </label>
        </div>
        <div class="text-end ps-0 col-3" onclick="app.ToDoController.deleteToDo('${this.id}')"> Remove <i class="mdi text-danger mdi-delete fs-4"></i></div>
        </section>
        `
    }

    // static ToDoListTemplate(todo) {
    //     return /*html*/ `
    //         <p class="selectable" onclick="app.ToDoController.getToDos('${todo.index}')">
    //         <span><input type="checkbox" ></span> ${todo.description}
    //         <div class="row justify-content-end col-4 text-end"> Remove <i class="mdi text-danger mdi-delete fs-4"></i></div>


    //     </p>
    //     `
    // }

    static todosCount(todosLeft) {
        return `
    <button class="todoButton" class="btn frosted-card col-md-1 col-2 me-2" data-bs-toggle="offcanvas"
      data-bs-target="#newToDoOffcanvas">
      To Do List <span id="todoCount">${AppState.todosLeft}</span><i class="mdi mdi-checkbox-multiple-marked-outline"></i>
    </button>
    `
    }

    get toggledCheck() {
        if (this.completed) {
            return `
            <input onchange="app.ToDoController.toggleCheck('${this.id}')" type="checkbox" >
            `
        } else {
            return `
            <input onchange="app.ToDoController.toggleCheck('${this.id}')"  type="checkbox" >
            `
        }
    }
}

{/* <input ${this.completed ? 'checked' : ''} onchange="app.ToDoController.toggleCheck(todoId)" class="form-check-input" type="checkbox" value="" id="todoComplettion"> */ }
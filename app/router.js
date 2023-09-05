import { AppState } from "./AppState.js";
import { AboutController } from "./controllers/AboutController.js";
import { ClockController } from "./controllers/ClockController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ToDoController } from "./controllers/TodosController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { Image } from "./models/Image.js";
import { accountService } from "./services/AccountService.js";
import { AboutView } from "./views/AboutView.js";



/**
 * Register your routes for the application here
 * @type {Route[]}
*/
export const router = [
  {
    path: '',
    controller: [ImagesController, QuotesController, WeatherController, ToDoController, ClockController],
    view: /*html*/`
     <section class="row justify-content-between">

    <div id="activeWeather" class="selectable col-md-6 col-9" onclick="app.WeatherController.toggleTemp()">
   
    
  </div>
    
  
    <button class="btn frosted-card col-md-1 col-2 me-2" data-bs-toggle="offcanvas"
      data-bs-target="#newToDoOffcanvas">
      To Do List <span id="todoCount">${AppState.todosLeft}</span><i class="mdi mdi-checkbox-multiple-marked-outline"></i>
    </button>
  </section>

  <div id="newToDoOffcanvas" class="frosted-card offcanvas offcanvas-end ms-1 p-1">


    <form class="row p-1" onsubmit="app.ToDoController.createToDo()">

      <div class="form-floating mb-3">
        <label for="ToDo">New To Do</label>
        <input required type="text" minLength="3" maxLength="35" class="form-control" id="description"
          name="description" placeholder="task">
      </div>

      <div class="text-end">
        <button type="submit" class="btn frosted-card">List To Do</button>

      </div>

    </form>
    <hr>
    <div id="todoList" class="">
     
    </div>
  </div>
  `
  },


  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */
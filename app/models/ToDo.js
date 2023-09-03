

export class ToDo {
    constructor(data) {
        console.log('todo constructor');
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId

    }


    get listTemplate() {
        return /*html*/ `
        <div class="card col-md-2 col-6">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            ${this.description}
            </label>
        </div>
        `
    }
}
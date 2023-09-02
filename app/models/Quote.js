


export class Quote {
    constructor(data) {
        console.log('quote model');
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get activeTemplate() {
        return /*html*/ `
        <div class="col-md-6 col-12">
        <div>
        <i class="fs-5">"${this.content}"</i>
        <p id="author" class="fs-6 text-end">~${this.author}</p>
        </div>
        </div>
        `
    }
}
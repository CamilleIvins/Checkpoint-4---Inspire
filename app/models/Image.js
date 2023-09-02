

export class Image {
    constructor(data) {
        console.log('image model');
        this.imgUrl = data.largeImgUrl || data.url || data.imgUrl
        this.tag = data.tags
        this.author = data.author
        this.query = data.query
    }


    // get activeTemplate() {
    //     return /*HTML*/ `
    //     <div class="col-md-8 text-white">
    //     <div class="apod-wrapper">
    //       <div class="text-end image-header">
    //         <h1>${this.tag}</h1>
    //       </div>
    //       <p class="author">${this.author}</p>
    //     </div>
    //   </div>
    //     `
    // }
}

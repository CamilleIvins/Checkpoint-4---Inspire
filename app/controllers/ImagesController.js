import { AppState } from "../AppState.js";
import { imagesservice } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";



function _drawImage() {     //NASA lecture
    console.log('draw image');
    let bgImage = AppState.activeImage
    document.body.style.backgroundImage = `url(${bgImage.imgUrl})`  //why is this npt working...should not even need HTML, those are other controllers
    // setHTML('activeImage', bgImage.activeTemplate)
    // setText('author', bgImage.author)
}

export class ImagesController {
    constructor() {
        console.log('images controller up');
        this.getImage()
        AppState.on('account', _drawImage)  //<--see about trying to get author info somewhere....
        // AppState.on('activeImage', _drawImage)   <---should not need double draw
    }

    async getImage() {
        try {
            await imagesservice.getImage()  //Ctrl + . to get a mirror in SERVICE
        } catch (error) {
            Pop.error(error)
        }
    }

}
// imagesservice
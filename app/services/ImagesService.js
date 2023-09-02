import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js"




class ImagesService {
    async getImage() {
        // jump into SANDBOX
        // log - did it...work?
        // make the active a new case in MODEL
        // log - did all the details get transferred appropriately?
        const res = await api.get('api/images')
        console.log('res data', res.data);
        AppState.activeImage = new Image(res.data)
        console.log('trying service get', AppState.activeImage);
    }



}

export const imagesservice = new ImagesService()
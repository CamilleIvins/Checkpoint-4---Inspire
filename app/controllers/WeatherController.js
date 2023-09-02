import { AppState } from "../AppState.js";
import { weatherservice } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather() {
    console.log('drawing weather');
    let bgWeather = AppState.activeWeather
    setHTML('activeWeather', bgWeather.activeTemplate)
}

export class WeatherController {
    constructor() {
        console.log('weather controller up');
        this.getWeather()
        AppState.on('account', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherservice.getWeather()
        } catch (error) {
            Pop.error(error)
        }

    }
}
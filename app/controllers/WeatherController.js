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
        AppState.on('account', _drawWeather)
        // AppState.on('account', this.getWeather)
        this.getWeather()
        setInterval(_drawWeather, 60000)
    }

    async getWeather() {
        try {
            await weatherservice.getWeather()
        } catch (error) {
            Pop.error(error)
        }

    }
}
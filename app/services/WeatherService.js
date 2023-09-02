import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"


class WeatherService {
    async getWeather() {
        const res = await api.get('api/weather')
        console.log('res weather data', res.data);
        AppState.activeWeather = new Weather(res.data)
        console.log('testing weather get/reformat', AppState.activeWeather);
    }
    // jump into SANDBOX
    // log - did it...work?
    // make the active a new case in MODEL
    // log - did all the details get transferred appropriately?

}

export const weatherservice = new WeatherService()
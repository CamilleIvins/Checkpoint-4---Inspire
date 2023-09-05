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



    // async toggleTemp() {
    //     // const res = await api.get('api/weather')
    //     // res.temp = res.temp * 9 / 5 + 32
    //     // res.temp_max = res.temp_max * 9 / 5 + 32
    //     // res.temp_min = res.temp_min * 9 / 5 + 32
    //     const res = await api.get('api/weather')

    //     let temperature = AppState.activeWeather
    //     if (temperature.isFahrenheit) {
    //         AppState.emit('activeWeather')
    //         console.log(temperature.isFahrenheit);
    //         temperature.isFahrenheit = !temperature.isFahrenheit
    //     }
    //     else if (!temperature.isFahrenheit) {
    //         AppState.emit('activeWeather')
    //         temperature.isFahrenheit = temperature.isFahrenheit
    //     }
    // }
}

export const weatherservice = new WeatherService()
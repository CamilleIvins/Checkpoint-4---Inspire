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
        setInterval(_drawWeather, 180000)
    }

    async getWeather() {
        try {
            await weatherservice.getWeather()
        } catch (error) {
            Pop.error(error)
        }

    }

    toggleTemp() {
        const temperature = AppState.activeWeather
        if (temperature.isFahrenheit == false) {
            temperature.isFahrenheit = true
            console.log(temperature.isFahrenheit);
            _drawWeather()
            // setHTML('activeWeather', temperature.activeTemplate)
        } else if (temperature.isFahrenheit == true) {
            temperature.isFahrenheit = false
            _drawWeather()
            // setHTML('activeWeather', temperature.activeTemplate)
        }
    }

    // async toggleTemp() {
    //     try {
    //         await weatherservice.toggleTemp()

    //     } catch (error) {
    //         Pop.error(error)
    //         console.error(error)
    //     }
    // }

    // async toggleTemp(fahrenheit) {
    //     const celsius = AppState.activeWeather
    //     await weatherservice.toggleTemp(fahrenheit)
    //     // const celsius = AppState.weatherC
    //     if (celsius) {
    //         setHTML('activeWeather', celsius.activeTemplate)
    //     } else {
    //         // trouble when setting to
    //         // const fahrenheit = AppState.weather.find(f => f.temp * 9 / 5 + 32)
    //         console.log('fahrenheit', fahrenheit);
    //         setHTML('activeWeather', fahrenheit.activeFTemplate)

    //     }


}



export class Weather {
    constructor(data) {
        console.log('weather model constructor - test adaption here')
        this.coord = data.coord
        this.weather = data.weather
        this.base = data.base
        this.tempC = (data.main.temp - 273).toFixed(0)
        this.feelsLikeC = (data.main.feels_like - 273).toFixed(0)
        this.lowC = (data.main.temp_min - 273).toFixed(0)
        this.highC = (data.main.temp_max - 273).toFixed(0)
        this.tempF = ((data.main.temp - 273) * 9 / 5 + 32).toFixed(0)
        this.feelsLikeF = ((data.main.feels_like - 273) * 9 / 5 + 32).toFixed(0)
        this.lowF = ((data.main.temp_min - 273) * 9 / 5 + 32).toFixed(0)
        this.highF = ((data.main.temp_max - 273) * 9 / 5 + 32).toFixed(0)
        this.humidity = data.main.humidity

        this.visibility = data.visibility
        this.wind = data.wind
        this.clouds = data.clouds
        this.dt = data.dt
        this.sys = data.sys
        this.timezone = data.timezone
        this.id = data.id
        this.name = data.name
        this.cod = data.cod
        this.baseUrl = data.origin

        this.isFahrenheit = false
    }
    // make a special class for a weather card

    get activeTemplate() {
        if (this.isFahrenheit)
            return /*html*/ `
        <div class="frosted-card col-md-5 col-6">
        <div class="p-1">
            <div class="text-center">${this.name}</div>
            <div class="row justify-content-center text-center">

                <div class="col-5 px-2">Current</div>
                <div class="col-5 px-2">High/Low</div>
                <div class="col-5 px-2 fw-bold">${this.tempC}°C</div>
                <div class="col-5 px-2 high-low fw-bold">${this.highC}°C/${this.lowC}°C</div>
            </div>
        </div>
        </div>
        `
        else if (!this.isFahrenheit) {
            return /*html*/ `
    <div class="frosted-card col-md-3 col-6">
    <div class="p-1">
        <div class="text-center">${this.name}</div>
        <div class="row justify-content-around text-center">

            <div class="col-5">Current</div>
            <div class="col-5">High/Low</div>
            <div class="col-5 fw-bold">${this.tempF}°F</div>
            <div class="col-5 high-low fw-bold">${this.highF}°F/${this.lowF}°F</div>
        </div>
    </div>
    </div>
    `

        }

    }

    // get activeFTemplate() {
    //     return /*html*/ `
    //         <div class="frosted-card col-md-3 col-6">
    //         <div class="p-1">
    //             <div class="text-center">${this.name}</div>
    //             <div class="row justify-content-around text-center">

    //                 <div class="col-5">Current</div>
    //                 <div class="col-5">High/Low</div>
    //                 <div class="col-5 fw-bold">(${this.temp}*9/5 + 32)°F</div>
    //                 <div class="col-5 high-low fw-bold">(${this.high}*9/5 + 32)°F/(${this.low}*9/5 + 32)°F</div>
    //             </div>
    //         </div>
    //         </div>
    //         `

    // }


}
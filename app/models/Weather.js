

export class Weather {
    constructor(data) {
        console.log('weather model constructor - test adaption here')
        this.coord = data.coord
        this.weather = data.weather
        this.base = data.base
        this.temp = (data.main.temp - 273).toFixed(0)
        this.feelsLike = (data.main.feels_like - 273).toFixed(0)
        this.low = (data.main.temp_min - 273).toFixed(0)
        this.high = (data.main.temp_max - 273).toFixed(0)
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
    }
    // make a special class for a weather card

    get activeTemplate() {
        return /*html*/ `
        <div class="card col-md-2 col-6">
        <div class="text-center">${this.name}</div>
        <div class="row space-content-around text-center">
            <div class="col-5">${this.temp}</div>
            <div class="col-5 high-low">${this.high}/${this.low}</div>
        </div>
        </div>
        `

    }

}
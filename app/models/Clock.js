const dateOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

export class Clock {
    constructor(data) {
        console.log('clock model')
        this.time = new Date(data.date)
    }


    get date() {
        let time = this.date
        return time.toLocaleDateString('en-us', dateOptions)

    }
}
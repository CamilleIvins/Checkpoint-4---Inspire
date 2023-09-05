import { AppState } from "../AppState.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawClock() {
    let time = new Date()
    const dateOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
    // @ts-ignore
    let clock = time.toLocaleTimeString('en-us', dateOptions)
    setHTML('clock', clock)
}

export class ClockController {
    constructor() {
        setInterval(_drawClock, 1000)
    }

}
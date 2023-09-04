import { AppState } from "../AppState.js";
import { quotesservice } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
    console.log('drawing quote');
    let bgQuote = AppState.activeQuote
    setHTML('activeQuote', bgQuote.activeTemplate)
}

export class QuotesController {
    constructor() {
        console.log('quotes controller up');
        AppState.on('account', _drawQuote)
        // AppState.on('account', this.getQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesservice.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}
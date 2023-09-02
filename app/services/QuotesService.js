import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";
api
Quote
AppState


class QuotesService {
    async getQuote() {
        // jump into SANDBOX
        // log - did it...work?
        // make the active a new case in MODEL
        // log - did all the details get transferred appropriately?
        const res = await api.get('api/quotes')
        console.log('quote res data', res.data);
        AppState.activeQuote = new Quote(res.data)
        console.log('trying to show quote', AppState.activeQuote);
    }

}

export const quotesservice = new QuotesService()
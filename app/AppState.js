import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {



  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  /** @type {import('./models/Image.js').Image | null} */
  activeImage = null
  image = []

  /** @type {import('./models/Quote.js').Quote | null} */
  activeQuote = null
  quote = []

  /** @type {import('./models/Weather.js').Weather | null} */
  activeWeather = null
  weather = []

  /** @type {import('./models/ToDo.js').ToDo | null} */
  activeTodo = null
  todos = []


  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
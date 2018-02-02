import { createStore, combineReducers } from 'redux'

import placesReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placesReducer
})

// Creamos la store
const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore

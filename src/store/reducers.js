import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n';
import locationReducer from './location'
import venueReducer from './reducers/venue-reducer'
import authReducer from './reducers/auth-reducer'
import bookingReducer from './reducers/booking-reducer'
import language_selection from './reducers/language-selection'
import { reducer as modal } from 'redux-modal'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    venues: venueReducer,
    auth: authReducer,
    i18n: i18nReducer,
    routing: routerReducer,
    booking: bookingReducer,
    form: formReducer,
    language_selection,
    modal,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

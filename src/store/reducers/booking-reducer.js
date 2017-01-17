import {
  CHOOSE_SLOT,
  CHANGE_DATE,
  SPORTS_LIST_VISIBILITY,
  CHANGE_SPORT,
  ON_SLOT_SELECT,
  ON_COURT_SELECT,
  UPDATE_VENUE_SLOTS,
  TOGGLE_LOADED,
  CLEAR_STATE,
  CLEAR_SELECTED_COURTS,
  SAVE_CARDS,
  SELECT_CARD,
  UPDATE_DURATION
} from '../../actions/booking-actions'


const initialState = {
  venue: {},
  date: '',
  sportsListVisible: false,
  sport: '',
  activeSlot: '',
  slots: {},
  selectedCourts: [],
  loaded: true,
  cards: [],
  selectedCard: '',
  duration: ''
}

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_SLOT:
      return {
        ...state,
        venue: action.payload
      }
    case CHANGE_DATE:
      return {
        ...state,
        date: action.payload
      }
    case SPORTS_LIST_VISIBILITY:
      return {
        ...state,
        sportsListVisible: !state.sportsListVisible
      }
    case CHANGE_SPORT:
      return {
        ...state,
        sport: action.payload
      }
    case ON_SLOT_SELECT:
      return {
        ...state,
        activeSlot: action.payload
      }
    case ON_COURT_SELECT:
      const index = state.selectedCourts.indexOf(action.payload);
      if (index !== -1) {
        return {
          ...state,
          selectedCourts: [
            ...state.selectedCourts.slice(0, index),
            ...state.selectedCourts.slice(index + 1)
          ]
        }
      } else {
        return {
          ...state,
          selectedCourts: [
            ...state.selectedCourts,
            action.payload
          ]
        }
      }
    case UPDATE_VENUE_SLOTS:
      return {
        ...state,
        slots: action.payload
      }
    case TOGGLE_LOADED:
      return {
        ...state,
        loaded: !state.loaded
      }

    case CLEAR_STATE:
      return {
        ...initialState
      }
    case CLEAR_SELECTED_COURTS:
      return {
        ...state,
        selectedCourts: []
      }

    case SAVE_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    case SELECT_CARD:
      return {
        ...state,
        selectedCard: action.payload
      }
    case UPDATE_DURATION:
      return {
        ...state,
        duration: action.payload
      }
    default:
      return state
  }
}

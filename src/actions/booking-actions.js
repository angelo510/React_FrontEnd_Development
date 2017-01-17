export const CHOOSE_SLOT = 'CHOOSE_SLOT'
export const CHANGE_DATE = 'CHANGE_DATE'
export const SPORTS_LIST_VISIBILITY = 'SPORTS_LIST_VISIBILITY'
export const CHANGE_SPORT = 'CHANGE_SPORT'
export const ON_SLOT_SELECT = 'ON_SLOT_SELECT'
export const UPDATE_VENUE_SLOTS = 'UPDATE_VENUE_SLOTS'
export const ON_COURT_SELECT = 'ON_COURT_SELECT'
export const TOGGLE_LOADED = 'TOGGLE_LOADED'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_SELECTED_COURTS = 'CLEAR_SELECTED_COURTS'
export const SAVE_CARDS = 'SAVE_CARDS'
export const SELECT_CARD = 'SELECT_CARD'
export const UPDATE_DURATION = 'UPDATE_DURATION'

export const chooseSlot = venue => ({
  type: CHOOSE_SLOT,
  payload: venue
})

export const changeDate = date => ({
  type: CHANGE_DATE,
  payload: date
})

export const toggleSportsList = () => ({
  type: SPORTS_LIST_VISIBILITY
})

export const changeSport = sport => ({
  type: CHANGE_SPORT,
  payload: sport
})

export const onSlotSelect = slot => ({
  type: ON_SLOT_SELECT,
  payload: slot
})

export const updateVenueSlots = slots => ({
  type: UPDATE_VENUE_SLOTS,
  payload: slots
})

export const onCourtSelect = court => ({
  type: ON_COURT_SELECT,
  payload: court
})

export const toggleLoaded = () => ({
  type: TOGGLE_LOADED
})

export const clearState = () => ({
  type: CLEAR_STATE
})

export const clearSelectedCourts = () => ({
  type: CLEAR_SELECTED_COURTS
})

export const saveCards = cards => ({
  type: SAVE_CARDS,
  payload: cards
})

export const selectCard = id => ({
  type: SELECT_CARD,
  payload: id
})

export const updateDuration = duration => ({
  type: UPDATE_DURATION,
  payload: duration
})

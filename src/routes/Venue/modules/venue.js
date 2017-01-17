// ------------------------------------
// Constants
// ------------------------------------

export const ON_VENUE_PAGE_LOAD = 'ON_VENUE_PAGE_LOAD'
export const CHANGE_IMAGE = 'CHANGE_IMAGE'

// ------------------------------------
// Actions
// ------------------------------------

export const onVenueLoad = (venue) => ({
  type: ON_VENUE_PAGE_LOAD,
  venue: venue
})

export function changeImage (nextIndex) {
  return {
    type: CHANGE_IMAGE,
    payload: nextIndex
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  ON_VENUE_PAGE_LOAD: (state, action) => ({
    ...state,
    venue: action.venue
  }),

  CHANGE_IMAGE: (state, action) => ({
    ...state,
    imageIndex: action.payload
  })
}

// ------------------------------------
// Reducer ** Initial values
// ------------------------------------

const initialState = {
  venue: null,
  imageIndex: 0,
}

export default function venueReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

/****************************************
*     Export api functions.             *
* Kept separate to have code integrity  *
****************************************/

export { loadVenue } from '../../../api/venue-api'

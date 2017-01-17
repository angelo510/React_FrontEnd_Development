import * as types from '../actions/action-types'

export const GET_VENUE_SUCCESS = types.GET_VENUE_SUCCESS
export const GET_SPORT_NAMES_SUCCESS = types.GET_SPORT_NAMES_SUCCESS
export const SET_ACTIVE_SPORT = types.SET_ACTIVE_SPORT
export const TOGGLE_NEW_SPORT_SELECTION = types.TOGGLE_NEW_SPORT_SELECTION

export function getVenueSuccess (all_venues) {
  return {
    all_venues: all_venues,
    type: types.GET_VENUE_SUCCESS
  }
}

/*******************
*   VenueCategory  *
********************/

export function getSportNameSuccess (sports) {
  return {
    sports: sports,
    type: types.GET_SPORT_NAMES_SUCCESS
  }
}

export function changeActiveSport (newActiveSport) {
  return {
    activeSport: newActiveSport,
    type: types.SET_ACTIVE_SPORT
  }
}

export function toggleSportSelectionMenu () {
  return {
    type: types.TOGGLE_NEW_SPORT_SELECTION
  }
}

export function selectActiveSport (newActiveSport) {
  return (dispatch, getState) => {
    dispatch(changeActiveSport(newActiveSport))
  }
}

/****************************************
*     Export api functions.             *
* Kept separate to have code integrity  *
****************************************/

export { getVenues } from '../api/venue-api'
export { getSportNames } from '../api/venue-api'

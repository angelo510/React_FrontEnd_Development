import axios from 'axios'
import toastr from 'toastr'
import { show, destroy } from 'redux-modal'
import { getVenueSuccess, getSportNameSuccess } from '../actions/venue-actions'
import { updateVenueSlots, toggleLoaded } from '../actions/booking-actions'
import { onVenueLoad } from '../routes/Venue/modules/venue'
import api_endpoints from '../../config/apis'

/**
 * GET_VENUES
 * /api/venues.json
 * @param {string} sport
 * //TODO: --> /api/venues.json
 */

export function getVenues(sport = '') {
  return (dispatch, getState) => axios.get(`${api_endpoints.playven}/venues.json?sport=${sport}`)
      .then(response => {
        dispatch(getVenueSuccess(response.data.venues))
        return response
      })
}

export function loadVenue(venue_id) {
  return (dispatch, getState) => axios.get(`${api_endpoints.playven}/venues/${venue_id}.json`)
      .then(response => {
        dispatch(onVenueLoad(response.data))
        return response
      })
}

export const fetchSingleVenue = params => {
  const { venue_id, date, time, duration, sport_name } = params;

  return dispatch => {
    dispatch(toggleLoaded());
    return axios.get(`${api_endpoints.playven}/venues/${venue_id}/available_courts.json`, {
      params: {
        date,
        time,
        duration,
        sport_name
      }
    })
    .then(response => {
      dispatch(updateVenueSlots(response.data));
      dispatch(toggleLoaded());
    })
  }
}

/**
 * GET_ALL_SPORT_NAMES
 * api/all_sport_names.json
 */

export function getSportNames() {
  return (dispatch, getState) => axios.get(`${api_endpoints.playven}/all_sport_names.json`)
      .then(response => {
        dispatch(getSportNameSuccess(response.data))
        return response
      })
}

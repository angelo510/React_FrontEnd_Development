import { browserHistory } from 'react-router'
import axios from 'axios'
import api_endpoints from '../../../../config/apis'
import toastr from 'toastr'

// ------------------------------------
// Constants
// ------------------------------------
export const HANDLE_SEARCHGRID_FORM_SUBMIT = 'HANDLE_SEARCHGRID_FORM_SUBMIT'

export function onSearchSuccess(searchResults) {
  return {
    searchResults,
    type: HANDLE_SEARCHGRID_FORM_SUBMIT
  }
}

export function onFetching() {
  return {
    searching: true,
    type: HANDLE_SEARCHGRID_FORM_SUBMIT
  }
}

export const getSearchResults = queryParams =>
  axios
    .get(`${api_endpoints.playven}/search.json`, { params: queryParams })
    .catch(err => toastr.error(err))

// TODO: move to api
export function onSubmit(e) {
  e.preventDefault()

  const fields = Array.from(e.target.elements);
  // Don't add the submit button
  const queryParams = {}

  fields
    .filter(v => v.name !== v.value)
    .forEach(v => {
      queryParams[v.name] = v.value
    })

  return dispatch => {
    dispatch(onFetching())
    return getSearchResults(queryParams)
    .then(response => dispatch(onSearchSuccess(response.data.venues)))
    .then(browserHistory.push({ pathname: '/search', query: queryParams }))
  }
}


export const initResults = () => (dispatch, getState) => {
  const state = getState();
  const queryParams = state.location.query
  dispatch(onFetching())
  return getSearchResults(queryParams)
    .then(response => dispatch(onSearchSuccess(response.data.venues)))
    .then(browserHistory.push({ pathname: '/search', query: queryParams }))
}


export const actions = {
  onSubmit,
  initResults
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [HANDLE_SEARCHGRID_FORM_SUBMIT]: (state, action) => (
    {
      ...state,
      searchResults: action.searchResults || state.searchResults,
      searching: action.searching || false
    })
}

// ------------------------------------
// Reducer ** Initial values
// ------------------------------------

// TODO: get from api
// Sport
const sports = [
  {
    id: 'tennis',
    text: 'activerecord.attributes.court/sport_name.tennis'
  },
  {
    id: 'pickleball',
    text: 'activerecord.attributes.court/sport_name.pickleball'
  }
]
// Duration
const durations = [
  {
    id: '60',
    text: '60 min'
  },
  {
    id: '30',
    text: '30 min'
  },
  {
    id: '120',
    text: '2 hour'
  },
  {
    id: '180',
    text: '3 hour'
  },
  {
    id: '240',
    text: '4 hour'
  }
]
// Timetable
let startTime = 600
const endTime = 2300
const timetable = []

while (startTime <= endTime) {
  timetable.push(startTime)
  startTime = startTime % 100 > 0 ? startTime + 70 : startTime = startTime + 30
}

const initialState = {
  fields: {
    sports,
    durations,
    timetable
  },
  searchResults: [],
  searching: false
}

export default function searchgridReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

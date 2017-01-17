import axios from 'axios'
import toastr from 'toastr'
import api_endpoints from '../../config/apis'
import {
    getUserReservationsSuccess
  }
from '../routes/Profile/modules/profile.js'


export const getUserReservations = () => (dispatch, getState) => {
  const state = getState();
  const future = state.profile.future

  const url = `${api_endpoints.playven}/reservations.json`
  console.log(url)
  return axios.get(url)
    .then(res => {
      dispatch(getUserReservationsSuccess(res.data))
    })
    .catch(error => toastr.error(error))
}

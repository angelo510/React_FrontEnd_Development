import axios from 'axios'
import toastr from 'toastr'
import { show, destroy } from 'redux-modal'
import { toggleLoaded, saveCards, selectCard, clearState } from '../actions/booking-actions'
import api_endpoints from '../../config/apis'
import { cancelReservationSuccess, toggleAlert } from '../routes/Profile/modules/profile'
import { resellReservationSuccess } from '../routes/Profile/modules/profile'
import moment from 'moment'

export const bookWithoutPayment = (duration, date) => {
  return (dispatch, getState) => {
    const state = getState();
    const { activeSlot } = state.booking;
    const { selectedCourts } = state.booking;
    const bookings = selectedCourts.map(court => {
      const start_time = moment.utc(date, 'DD/MM/YYYY').add(activeSlot, 'minutes');
      return ({ id: court.id, price: court.price, start_time, duration })
    });
    return axios.post(`${api_endpoints.mywebsite}/reservations`, {
      duration,
      date,
      bookings: JSON.stringify(bookings),
    })
    .then(resp => {
      dispatch(destroy('payment'));
      dispatch(show('success'));
      dispatch(clearState());
    })
    .catch(error =>  toastr.error("Booking failed! something went wrong."))
  }
}

export const pay = (duration, date) => {
  return (dispatch, getState) => {
    const state = getState();
    const card = state.booking.selectedCard;
    const { activeSlot } = state.booking;
    if (!card) {
      toastr.error('Please select a card to pay');
      return false;
    }
    const { selectedCourts } = state.booking;
    const bookings = selectedCourts.map(court => {
      const start_time = moment.utc(date, 'DD/MM/YYYY').add(activeSlot, 'minutes');
      return ({ id: court.id, price: court.price, start_time, duration })
    });
    dispatch(toggleLoaded());
    return axios.post(`${api_endpoints.mywebsite}/reservations`, {
      duration,
      date,
      bookings: JSON.stringify(bookings),
      card,
      pay: true,
    })
    .then(resp => {
      dispatch(toggleLoaded());
      dispatch(destroy('payment'));
      dispatch(show('success'));
      dispatch(clearState());
    })
    .catch(error =>  {
      dispatch(toggleLoaded());
      toastr.error("Booking failed! something went wrong.")
    })
  }
}

export const getCards = () => {
  return dispatch => {
    dispatch(toggleLoaded());
    return axios.get(`${api_endpoints.mywebsite}/cards.json`)
    .then(resp => {
      dispatch(toggleLoaded());
      resp.data.cards !== null && dispatch(saveCards(resp.data.cards.data));
      resp.data.default_card !== null && dispatch(selectCard(resp.data.default_card))
    })
    .catch(error =>  {
      console.log(error)
      dispatch(toggleLoaded());
    })
  }
}

export const addCard = token => {
  return (dispatch) => {
    dispatch(toggleLoaded());
    return axios.post(`${api_endpoints.mywebsite}/cards`, {
      token: token.id
    })
    .then(resp => {
      console.log(resp);
      dispatch(toggleLoaded());
      dispatch(saveCards(resp.data.cards.data));
      resp.data.default_card !== null && dispatch(selectCard(resp.data.default_card));
    })
    .catch(error =>  {
      console.log(error)
      dispatch(toggleLoaded());
      toastr.error("Card could not be added!");
    })
  }
}

export const cancelReservation = reservation => {
  return dispatch => {
    axios.delete(`${api_endpoints.mywebsite}/reservations/${reservation.id}`)
    .then(({data}) => {
      toastr.success(data.message);
      dispatch(cancelReservationSuccess(reservation));
      dispatch(toggleAlert())
    })
    .catch(error =>  {
      dispatch(toggleAlert())
      toastr.error(error.response.data.errors.join(', '));
    })
  }
}

export const resellReservation = reservation => {
  return dispatch => {
    axios.get(`${api_endpoints.mywebsite}/reservations/${reservation.id}/resell.json`)
    .then(({data}) => {
      toastr.success(data.message);
      dispatch(resellReservationSuccess(reservation));
    })
    .catch(error =>  {
      toastr.error(error.response.data.errors.join(', '));
    })
  }
}

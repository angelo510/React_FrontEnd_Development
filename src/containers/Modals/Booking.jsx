import { connect } from 'react-redux'
import { show } from 'redux-modal'
import Booking from '../../components/Modals/Booking/'
import { fetchSingleVenue } from '../../api/venue-api'

import {
  changeDate,
  toggleSportsList,
  changeSport,
  onSlotSelect,
  onCourtSelect,
  clearState,
  clearSelectedCourts
} from '../../actions/booking-actions'


const mapDispatchToProps = {
  openModal: show,
  changeDate,
  toggleSportsList,
  changeSport,
  onSlotSelect,
  onCourtSelect,
  fetchSingleVenue,
  clearState,
  clearSelectedCourts
}
const mapStateToProps = state => ({
  chosenVenue: state.venue && state.venue.venue || venueSelector(state.searchgrid.searchResults, state.booking.venue),
  sport: state.booking.sport || state.location.query.sport_name,
  icons: state.venues.all_sports,
  locale: state.i18n.locale,
  date: state.booking.date || state.location.query.date,
  sportsListVisible: state.booking.sportsListVisible,
  slots: slotsSelector(state.booking.slots, venueSelector(state.searchgrid.searchResults, state.booking.venue)),
  activeSlot: state.booking.activeSlot || state.location.query.time,
  selectedCourts: state.booking.selectedCourts,
  auth: state.auth.authenticated,
  duration: state.location.query.duration || state.booking.duration,
  loaded: state.booking.loaded,
})

const venueSelector = (venues, name) => venues.filter(venue => venue.venue_name === name)[0] || {};
const slotsSelector = (bookingSlotsModal, venue) => {
  // check if have data from single fetch venue
  if (!!Object.keys(bookingSlotsModal).length) {
    const keys = bookingSlotsModal.available !== null ? Object.keys(bookingSlotsModal.available) : [];
    if (keys.length) {
      return keys.map(key => ({ ...bookingSlotsModal.available[key], slot_time: key }));
    } else {
      return [];
    }
  }
  if (venue.data && venue.data.time_slots) {
    const keys = Object.keys(venue.data.time_slots);
    return keys.map(key => ({ ...venue.data.time_slots[key], slot_time: key }));
  }
  return [];
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking)

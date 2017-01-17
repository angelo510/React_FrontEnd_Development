import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import moment from 'moment'
import toastr from 'toastr'
import Header from './Header/'
import Footer from './Footer/'
import Text from '../../../containers/Text'
import BookingResultSlotList from './Content/BookingResultSlotList'
import BookingResultTimeSlotList from './Content/BookingResultTimeSlotList'
import Fa from 'react-fontawesome'

export const Booking = (props) => {
  const { openModal, show, handleHide, icons, sport, submitSearch, chosenVenue, locale, date, changeDate, sportsListVisible,
    toggleSportsList, changeSport, slots, activeSlot = 0, onSlotSelect, onCourtSelect, selectedCourts, fetchSingleVenue, auth,
    clearState, duration, clearSelectedCourts, loaded } = props;

  const onHide = () => {
    handleHide();
    clearState();
  }
  const activeSlotTime = show && moment().startOf('day').minutes(activeSlot).format('HH:mm');
  const selectedSlot = slots.filter(slot => {
    const slotTime = moment(slot.slot_time, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');

    return slotTime === activeSlotTime;
  })[0];
  const params = {
    venue_id: chosenVenue.venue_id,
    time: activeSlotTime,
    duration,
    sport_name: sport,
    date
  }
  const onSportChange = newSport => {
    changeSport(newSport);
    clearSelectedCourts();
    fetchSingleVenue({ ...params, sport_name: newSport });
  }
  const onDateChange = newDate => {
    changeDate(moment(newDate).format('DD/MM/YYYY'));
    clearSelectedCourts();
    fetchSingleVenue({ ...params, date: moment(newDate).format('DD-MM-YYYY') });
  }

  const onBookClick = () => {
    if (!selectedCourts.length) {
      toastr.warning(Text.t('messages.errors.no_courts_selected'), '', {
        progressBar: true,
        timeOut: 2500
      })
      return false
    }

    handleHide()

    if (!auth) {
      openModal('notlogged')
      return false
    }

    openModal('payment')
    return true
  }

  return (
    <Modal dialogClassName="booking-modal" show={show} onHide={onHide}>
      <Modal.Header>
        <button type="button" className="booking-modal__close-button" aria-label="Close" onClick={onHide}>
          Close
        </button>
      </Modal.Header>
      <Modal.Body className="booking-modal__content">
        <Header
          sport={sport}
          icons={icons}
          submitSearch={submitSearch}
          venue={chosenVenue}
          locale={locale}
          date={date}
          changeDate={onDateChange}
          sportsListVisible={sportsListVisible}
          toggleSportsList={toggleSportsList}
          changeSport={onSportChange} />
        <div className="booking-modal__slot-picker flex-row-desktop color-bg-white">
          <BookingResultSlotList
            slots={slots}
            activeSlot={selectedSlot}
            onSlotSelect={onSlotSelect} />

          <div className="booking-modal__available-courts flex-row flex-vc flex-hc">
            {!loaded &&
            <Fa className="spinner color-primary-brand"
              name="refresh"
              spin={true}
              stack="2x" />
            }
            {loaded &&
            <BookingResultTimeSlotList
              slot={selectedSlot}
              empty={slots.length == 0}
              onCourtSelect={onCourtSelect}
              selectedCourts={selectedCourts}
              removable={false}
              duration={duration}
              activeSlot={selectedSlot} />
            }
          </div>
        </div>

        <Footer selectedCourts={selectedCourts}
          onBook={onBookClick}
          selectedSlot={selectedSlot}
          onCourtSelect={onCourtSelect}
          duration={duration} />
      </Modal.Body>
    </Modal>
  );
}

export default connectModal({
  name: 'booking'
})(Booking)

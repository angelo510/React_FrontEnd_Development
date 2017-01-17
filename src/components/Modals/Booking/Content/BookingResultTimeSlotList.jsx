import React from 'react'
import BookingResultTimeSlotListItem from './BookingResultTimeSlotListItem'
import Text from '../../../../containers/Text'
import moment from 'moment'

const BookingResultTimeSlotList = ({empty, slot = {}, selectedCourts = [], onCourtSelect, duration}) => {
  const parsedTime = moment(slot.slot_time, 'YYYY-MM-DD HH:mm:ss');
  const startTime = parsedTime.format('HH:mm');
  const courts = !!Object.keys(slot).length && slot.available_courts.map(court => ({...court, startTime})) || [];
  const remainingCourts = courts.filter(court =>
    !selectedCourts.some(selected => selected.id === court.id && validTime(selected.startTime, court.startTime, duration)));

  const content = empty ? (
    <div className='pts'>
      <div className='phs pvt t3'><Text text="modals.booking.error" /></div>
      <div className='phs pvt'><Text text="modals.booking.info_1" /></div>
      <div className='pht pvt'><Text text="modals.booking.info_2" /></div>
    </div>
  ) : !Object.keys(slot).length ? (
    <div className='pts'>
      <div className='phs pvt t3'><Text text="modals.booking.info_title" /></div>
      <p className='phs pvt'><Text text="modals.booking.info_1" /></p>
      <p className='phs pvt'><Text text="modals.booking.info_2" /></p>
    </div>
  ) : (
    <div className='flex-row flex-wrap'>
      { remainingCourts.map((court, index) => (
      <BookingResultTimeSlotListItem
        key={index}
        court={court}
        removable={false}
        onCourtSelect={onCourtSelect}
        duration={duration}/>
      )) }
    </div>
  );

  return (
    <div className='booking-modal__available-courts-list phs pbs-gt-mobile full-width full-height'>
      {content}
    </div>
  );
}

export default BookingResultTimeSlotList;

const validTime = (time1, time2, difference) => {
  const moment1 = moment(time1, 'HH:mm').add(+difference, 'm').format('HH:mm');
  return time1 === time2 || time1 < time2 && moment1 > time2
}

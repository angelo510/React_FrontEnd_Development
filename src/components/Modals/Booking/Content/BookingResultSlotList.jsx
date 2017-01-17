import React from 'react'
import BookingResultSlotListItem from './BookingResultSlotListItem'

const BookingResultSlotList = ({ slots, onSlotSelect, activeSlot }) => {
  return (
    <div className='booking-modal__available_times' ref={scrollToSelected}>
      {slots.map((slot, index) => (
        <BookingResultSlotListItem key={index} onSlotSelect={onSlotSelect} slot={slot} activeSlot={activeSlot}/>
      ))}
    </div>
  );
}

export default BookingResultSlotList;

const scrollToSelected = div => {
  if (div !== null) {
    const active = div.getElementsByClassName('booking_slot color-bdb-lighter-grey active')[0];
    active !== undefined && active.scrollIntoView()
  }
}

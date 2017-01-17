import React from 'react'
import BookingResultTimeSlotListItem from '../Content/BookingResultTimeSlotListItem'
import Text from "../../../../containers/Text"

const Footer = ({ selectedCourts, onBook, onCourtSelect, duration }) => {
  return (
    <div className='booking-modal__footer flex-row flex-col-mobile flex-hb mts color-bg-dark-blue color-bd-highlight-primary-brand'>
      <div className='mbs-gt-mobile mhs-mobile'>
        <div className='flex-row-desktop flex-wrap'>
          {selectedCourts.map((court, index) => (
            <BookingResultTimeSlotListItem
              classes='selected'
              court={court}
              duration={duration}
              key={index}
              onCourtSelect={onCourtSelect}
              removable
              selected
              showTime />
          ))}
        </div>
      </div>

      <div>
        <button className='booking-modal__book-button pl-btn-primary full-width-mobile' onClick={onBook}>
          <Text text="modals.booking.book" />
        </button>
      </div>
    </div>
  );
}

export default Footer;

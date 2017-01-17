import React from 'react'
import moment from 'moment'
import Text from '../../../../containers/Text'
import PriceBubble from './PriceBubble'

const BookingResultSlotListItem = ({onSlotSelect, slot, activeSlot}) => {
  let classes = `${activeSlot && activeSlot === slot ? 'active' : ''}`;
  const parsedDate = moment(slot.slot_time, 'YYYY-MM-DD HH:mm:ss');
  return (
    <div className={'booking_slot color-bdb-lighter-grey ' + classes}
         onClick={() => onSlotSelect(parsedDate.hours() * 60 + parsedDate.minutes())}>

      <PriceBubble currency="€" amount={slot.lowest_price}/>

      <div className='booking_slot__time'>
        {parsedDate.format('HH:mm')}
      </div>

      <div className='booking_slot__venue_name'>
        <Text text="modals.booking.available" /> ({slot.available_courts.length})
      </div>

      <div className='booking_slot__arrow'>
        <i className='icon-short-arrow-right'/>
      </div>
    </div>
  );
}

export default BookingResultSlotListItem;

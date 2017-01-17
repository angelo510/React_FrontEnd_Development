import React from 'react'
import BookingResultSlotList from '../../../src/components/Modals/Booking/Content/BookingResultSlotList';
import BookingResultTimeSlotList from '../../../src/components/Modals/Booking/Content/BookingResultTimeSlotList';
import { shallow, render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Booking modal Content', () => {
  const mockStore = configureStore();
  const initialState = {
    i18n: {
      locale: 'fi'
    }
  }
  const store = mockStore(initialState);

  describe('BookingResultSlotList', () => {
    const props = {
      slots: [
        {
          available: true,
          available_courts: [{ id:299,name:"Sisäkenttä 3",payment_skippable:true,price:18.5}],
          duration: 60,
          lowest_price: 18.5,
          slot_time: "2016-12-19 15:00:00 +0200"
        },
        {
          available: true,
          available_courts: [{ id:299,name:"Sisäkenttä 3",payment_skippable:true,price:18.5}],
          duration: 60,
          lowest_price: 18.5,
          slot_time: "2016-12-19 15:30:00 +0200"
        },
        {
          available: true,
          available_courts: [{ id:299,name:"Sisäkenttä 3",payment_skippable:true,price:18.5}],
          duration: 60,
          lowest_price: 18.5,
          slot_time: "2016-12-19 16:00:00 +0200"
        },
      ],
      activeSlot: undefined
    }
    const wrapper = render(<Provider store={store}><BookingResultSlotList {...props} /></Provider>);
    it('render all time slots', () => {
      expect(wrapper.find('.booking-modal__available_times .booking_slot').length).to.equal(props.slots.length)
    });

    it('has no active slot', () => {
      expect(wrapper.find('[class="booking_slot color-bdb-lighter-grey active"]').length).to.equal(0)
    })

    it('has active slot', () => {
      const props2 = Object.assign({}, props, { activeSlot: props.slots[2] });
      const wrapper2 = render(<Provider store={store}><BookingResultSlotList {...props2} /></Provider>);
      expect(wrapper2.find('[class="booking_slot color-bdb-lighter-grey active"]').length).to.equal(1)
    })
  })


  describe('BookingResultTimeSlotList', () => {
    const props = {
      duration: 60,
      empty: false,
      slot: {
        available: true,
        available_courts: [{ id:299,name:"Sisäkenttä 3",payment_skippable:true,price:18.5}, { id:300,name:"Sisäkenttä 4",payment_skippable:true,price:18.5}],
        duration: 60,
        lowest_price: 18.5,
        slot_time: "2016-12-19 15:00:00 +0200"
      },
      selectedCourts: []
    }

    const wrapper = render(<Provider store={store}><BookingResultTimeSlotList {...props} /></Provider>);
    const props2 = Object.assign({}, props, {selectedCourts: [props.slot.available_courts]});
    it('should render nofound_nantitle when slot is empty ', () => {
      const wrapper2 = render(<Provider store={store}><BookingResultTimeSlotList duration={props.duration} empty /></Provider>);
      expect(wrapper2.find('.booking-modal__available-courts-list .pts .phs').first().text()).to.equal('Error')
    });

    it('should render nantitle when no slots found ', () => {
      const wrapper2 = render(<Provider store={store}><BookingResultTimeSlotList duration={props.duration} empty={props.empty}  /></Provider>);
      expect(wrapper2.find('.booking-modal__available-courts-list .pts .phs').first().text()).to.equal('Info Title')
    });

    it('renders all courts when none selected', () => {
      expect(wrapper.find('.booking-modal__available-courts-list .booking-court').length).to.equal(props.slot.available_courts.length)
    })
  })
})

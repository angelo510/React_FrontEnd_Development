import React from 'react'
import { Booking } from '../../../src/components/Modals/Booking/';
import { shallow, render } from 'enzyme'

describe('test Booking', () => {
  const props = {
    icons: [
      { sport: "tennis", url: { active: 'active', inactive: 'inactive' } },
      { sport: "golf", url: { active: 'active', inactive: 'inactive' } }
    ],
    sport: 'tennis',
    locale: 'fi',
    date: '30/12/2016',
    sportsListVisible: false,
    slots: [
      { available_courts: [1, 2],slot_time: '17:00' },
      { available_courts: [1, 2],slot_time: '17:30' },
      { available_courts: [1, 2],slot_time: '18:00' }
    ],
    activeSlot: '17:00',
    selectedCourts: [],
    auth: false,
    duration: 60,
    loaded: true,
    chosenVenue: {
      venue_name: 2,
      supported_sports: ['tennis', 'golf'],
      data: {
        time_slots: {
          '17:00': {
            available_courts: [1, 2]
          },
          '18:00': {
            available_courts: [1, 2, 3]
          }
        }
      }
    }
  }

  const wrapper = shallow(<Booking {...props} />);

  describe('spinner', () => {
    it('doesn\'t render spinner when loaded true', () => {
      expect(wrapper.find('.spinner').length).to.equal(0)
    });

    it('render spinner when loaded false', () => {
      const props2 = Object.assign({}, props, { loaded: false });
      const wrapper2 = shallow(<Booking {...props2} />);
      expect(wrapper2.find('.spinner').length).to.equal(1)
    });
  });
})

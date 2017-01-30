import React from 'react'
import Header from '../../../src/components/Modals/Booking/Header/';
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Booking modal Header', () => {
  const mockStore = configureStore();
  const initialState = {
    i18n: {
      locale: 'fi'
    }
  }
  const props = {
    sport: 'tennis',
    icons: [
      {sport: "tennis", url: {active: 'tennis1', inactive: 'tennis2'}},
      {sport: "golf", url: {active: 'golf1', inactive: 'golf2'}}
    ],
    venue: {
      venue_name: 2, supported_sports: ['tennis', 'golf'], data: {
        time_slots: {
          '17:00': {
            available_courts: [1, 2]
          },
          '18:00': {
            available_courts: [1, 2, 3]
          }
        }
      }
    },
    date: '30/12/2016',
    sportsListVisible: false
  }
  const store = mockStore(initialState);
  const wrapper = render(<Provider store={store}><Header {...props} /></Provider>)
  describe('BookingModalVenueSportList', () => {
    it ('renders dropdown', () => {
      expect(wrapper.find('.booking-modal__sports-list .booking-modal__sports-list-dropdown').length).to.equal(1);
    })

    it ('sportsListVisible: false dropdown is hidden', () => {
      expect(wrapper.find('.booking-modal__sports-list .booking-modal__sports-list-dropdown-menu')[0].attribs.style).to.have.equal('display:none;');
    })

    it ('sportsListVisible: true dropdown is visible', () => {
      const props2 = Object.assign({}, props, { sportsListVisible: true });
      const wrapper2 = render(<Provider store={store}><Header {...props2} /></Provider>)
      expect(wrapper2.find('.booking-modal__sports-list .booking-modal__sports-list-dropdown-menu')[0].attribs.style).to.have.equal('display:block;');
    })

    it ('renders correctly number of remaining sports', () => {
      const props2 = Object.assign({}, props, { sportsListVisible: true });
      const wrapper2 = render(<Provider store={store}><Header {...props2} /></Provider>)
      expect(wrapper2.find('.booking-modal__sports-list .booking-modal__sports-list-dropdown .color-white').length).to.have.equal(props.icons.length - 1);
    })

    it ('renders correctly chosen icon', () => {
      expect(wrapper.find(`.booking-modal__sports-list .booking-modal__sports-list-dropdown .icon-${props.sport}`).length).to.equal(1);
    })
  })

  describe('SearchGridDatePicker', () => {
    it('renders correct className', () => {
      expect(wrapper.find('.booking-modal__header .react-datepicker__input-container')[0].children[0].attribs.class).to.equal('date-picker-input')
    })

    it('renders correct date', () => {
      expect(wrapper.find('.booking-modal__header .date-picker-input')[0].attribs.value).to.equal(props.date)
    })
  })

  it('renders correct venue name', () => {
    expect(wrapper.find('[class="flex t3 text-uc mbs-mobile"]').text()).to.equal(`${props.venue.venue_name}`)
  })
})

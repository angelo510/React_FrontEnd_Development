import React from 'react'
import Footer from '../../../src/components/Modals/Booking/Footer/';
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Booking modal Footer', () => {
  const mockStore = configureStore();
  const initialState = {
    i18n: {
      locale: 'fi'
    }
  }

  const props = {
    selectedCourts: [
      {
        id: 298,
        price: 22.5,
        name: "Sisäkenttä 2",
        payment_skippable: true,
        startTime: "02:00"
      },

      {
        id: 299,
      price: 18,
      name: "Sisäkenttä 3",
      payment_skippable: true,
      startTime: "03:00",
      },
      {
        id: 299,
        price: 21,
        name: "Sisäkenttä 3",
        payment_skippable: true,
        startTime: "23:00",
      }
    ],
    duration: 60,
  }
  const store = mockStore(initialState);

  const wrapper = render(<Provider store={store}><Footer {...props} /></Provider>)
  it('renders correct number of selectedCourts', () => {
    expect(wrapper.find('.booking-modal__footer .booking-court').length).to.equal(props.selectedCourts.length)
  })
})

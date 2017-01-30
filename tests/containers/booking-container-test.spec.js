import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TestUtils from 'react-addons-test-utils'
import Booking from '../../src/components/Modals/Booking'
import ConnectedBooking from '../../src/containers/Modals/Booking'
import { show } from 'redux-modal'
import * as actions from '../../src/actions/booking-actions';


describe('Booking modal', () => {
  const mockStore = configureStore();
  const initialState = {
    searchgrid: {
      searchResults: [
        { venue_name: 1 },
        { venue_name: 2, supported_sports: ['tennis', 'golf'], data: {
          time_slots: {
            '17:00': {
              available_courts: [1, 2]
            },
            '18:00': {
              available_courts: [1, 2, 3]
            }
          }
        }},
        { venue_name: 3 }]
    },
    booking: {
      venue: 2,
      sportsListVisible: false,
      loaded: true,
      selectedCourts: [],
      slots: []
    },
    location: {
      query: {
        sport_name: 'tennis',
        date: '30/12/2016',
        duration: 60,
        time: '17:00'
      }
    },
    venues: {
      all_sports: [
        {sport: "tennis", url: {active: 'active', inactive: 'inactive'}},
        {sport: "golf", url: {active: 'active', inactive: 'inactive'}}
      ]
    },
    i18n: {
      locale: 'fi'
    },
    auth: {
      authenticated: false
    },
    venue: {},
    modal: {
      booking: {
        show: true
      }
    }
  }
  const store = mockStore(initialState);
  const connectedApp = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedBooking /></Provider>);
  const app = TestUtils.findRenderedComponentWithType(connectedApp, Booking);
  describe('state provided by the store', () => {
    it('passes down props correctly', () => {
      expect(app.props.icons).to.deep.equal(initialState.venues.all_sports);
      expect(app.props.sport).to.deep.equal(initialState.location.query.sport_name);
      expect(app.props.chosenVenue).to.deep.equal(initialState.searchgrid.searchResults[1]);
      expect(app.props.locale).to.deep.equal(initialState.i18n.locale);
      expect(app.props.date).to.deep.equal(initialState.location.query.date);
      expect(app.props.sportsListVisible).to.deep.equal(initialState.booking.sportsListVisible);
      expect(app.props.slots.length).to.equal(Object.keys(initialState.searchgrid.searchResults[1].data.time_slots).length);
      expect(app.props.activeSlot).to.deep.equal(initialState.location.query.time);
      expect(app.props.selectedCourts).to.deep.equal(initialState.booking.selectedCourts);
      expect(app.props.auth).to.deep.equal(initialState.auth.authenticated);
      expect(app.props.duration).to.deep.equal(initialState.location.query.duration);
      expect(app.props.loaded).to.deep.equal(initialState.booking.loaded);
    });
  });
  it('passes actions correctly', () => {
    expect(app.props.openModal()).to.deep.equal(show());
    expect(app.props.clearState()).to.deep.equal(actions.clearState());
    expect(app.props.changeSport()).to.deep.equal(actions.changeSport());
    expect(app.props.clearSelectedCourts()).to.deep.equal(actions.clearSelectedCourts());
    expect(app.props.changeDate()).to.deep.equal(actions.changeDate());
    expect(app.props.clearSelectedCourts()).to.deep.equal(actions.clearSelectedCourts());
  })
});

import * as actions from '../../src/actions/venue-actions';
import * as types from '../../src/actions/venue-actions';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureStore(middlewares)
const store = mockStore();


describe('venue actions', () => {
  describe('getVenueSuccess', () => {
    it('has the correct type', () => {
      const action = actions.getVenueSuccess();
      expect(action.type).to.equal(types.GET_VENUE_SUCCESS);
    });

    it('has the correct payload', () => {
      const action = actions.getVenueSuccess([1, 2, 3]);
      expect(action.all_venues).to.deep.equal([1, 2, 3]);
    });
  });

  describe('getSportNameSuccess', () => {
    it('has the correct type', () => {
      const action = actions.getSportNameSuccess();
      expect(action.type).to.equal(types.GET_SPORT_NAMES_SUCCESS);
    });

    it('has the correct payload', () => {
      const action = actions.getSportNameSuccess(['tennis', 'golf']);
      expect(action.sports).to.deep.equal(['tennis', 'golf']);
    });
  });

  describe('changeActiveSport', () => {
    it('has the correct type', () => {
      const action = actions.changeActiveSport();
      expect(action.type).to.equal(types.SET_ACTIVE_SPORT);
    });

    it('has the correct payload', () => {
      const action = actions.changeActiveSport('tennis');
      expect(action.activeSport).to.deep.equal('tennis');
    });
  });

  describe('toggleSportSelectionMenu', () => {
    it('has the correct type', () => {
      const action = actions.toggleSportSelectionMenu();
      expect(action.type).to.equal(types.TOGGLE_NEW_SPORT_SELECTION);
    });
  });

  describe('selectActiveSport', () => {
    it('has the correct type and payload', () => {
      const expectedActions = [{ type: types.SET_ACTIVE_SPORT, activeSport: 'golf' }];
      store.dispatch(actions.selectActiveSport('golf'))
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
})

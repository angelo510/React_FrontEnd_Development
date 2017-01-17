import * as actions from '../../src/actions/booking-actions';
import * as types from '../../src/actions/booking-actions';

describe('booking-actions', () => {
  describe('chooseSlot', () => {
    it('has the correct type', () => {
      const action = actions.chooseSlot();
      expect(action.type).to.equal(types.CHOOSE_SLOT);
    });

    it('has the correct payload', () => {
      const action = actions.chooseSlot('venueName');
      expect(action.payload).to.equal('venueName');
    });
  });

  describe('changeDate', () => {
    it('has the correct type', () => {
      const action = actions.changeDate();
      expect(action.type).to.equal(types.CHANGE_DATE);
    });

    it('has the correct payload', () => {
      const action = actions.changeDate('DD-MM-YYYY');
      expect(action.payload).to.equal('DD-MM-YYYY');
    });
  });

  describe('toggleSportsList', () => {
    it('has the correct type', () => {
      const action = actions.toggleSportsList();
      expect(action.type).to.equal(types.SPORTS_LIST_VISIBILITY);
    });
  });

  describe('changeSport', () => {
    it('has the correct type', () => {
      const action = actions.changeSport();
      expect(action.type).to.equal(types.CHANGE_SPORT);
    });

    it('has the correct payload', () => {
      const action = actions.changeSport('newSport');
      expect(action.payload).to.equal('newSport');
    });
  });

  describe('onSlotSelect', () => {
    it('has the correct type', () => {
      const action = actions.onSlotSelect();
      expect(action.type).to.equal(types.ON_SLOT_SELECT);
    });

    it('has the correct payload', () => {
      const action = actions.onSlotSelect('slot');
      expect(action.payload).to.equal('slot');
    });
  });

  describe('updateVenueSlots', () => {
    it('has the correct type', () => {
      const action = actions.updateVenueSlots();
      expect(action.type).to.equal(types.UPDATE_VENUE_SLOTS);
    });

    it('has the correct payload', () => {
      const action = actions.updateVenueSlots('slots');
      expect(action.payload).to.equal('slots');
    });
  });

  describe('onCourtSelect', () => {
    it('has the correct type', () => {
      const action = actions.onCourtSelect();
      expect(action.type).to.equal(types.ON_COURT_SELECT);
    });

    it('has the correct payload', () => {
      const action = actions.onCourtSelect('court');
      expect(action.payload).to.equal('court');
    });
  });


  describe('toggleLoaded', () => {
    it('has the correct type', () => {
      const action = actions.toggleLoaded();
      expect(action.type).to.equal(types.TOGGLE_LOADED);
    });
  });

  describe('clearState', () => {
    it('has the correct type', () => {
      const action = actions.clearState();
      expect(action.type).to.equal(types.CLEAR_STATE);
    });
  });

  describe('clearSelectedCourts', () => {
    it('has the correct type', () => {
      const action = actions.clearSelectedCourts();
      expect(action.type).to.equal(types.CLEAR_SELECTED_COURTS);
    });
  });

  describe('saveCards', () => {
    it('has the correct type', () => {
      const action = actions.saveCards();
      expect(action.type).to.equal(types.SAVE_CARDS);
    });

    it('has the correct payload', () => {
      const action = actions.saveCards('cards');
      expect(action.payload).to.equal('cards');
    });
  });

  describe('selectCard', () => {
    it('has the correct type', () => {
      const action = actions.selectCard();
      expect(action.type).to.equal(types.SELECT_CARD);
    });

    it('has the correct payload', () => {
      const action = actions.selectCard('id');
      expect(action.payload).to.equal('id');
    });
  });

  describe('updateDuration', () => {
    it('has the correct type', () => {
      const action = actions.updateDuration();
      expect(action.type).to.equal(types.UPDATE_DURATION);
    });

    it('has the correct payload', () => {
      const action = actions.updateDuration('duration');
      expect(action.payload).to.equal('duration');
    });
  });
})

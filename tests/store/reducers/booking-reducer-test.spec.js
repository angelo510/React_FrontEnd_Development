import reducer from '../../../src/store/reducers/booking-reducer'

describe('reducer', () => {
  describe('default', () => {
    it('returns the initial state', () => {
      const initialState = {
        venue: {},
        date: '',
        sportsListVisible: false,
        sport: '',
        activeSlot: '',
        slots: {},
        selectedCourts: [],
        loaded: true,
        cards: [],
        selectedCard: '',
        duration: ''
      }
      expect(reducer(undefined, {})).to.deep.equal(initialState);
    });
  })

  describe('on CHOOSE_SLOT action', () => {
    const state = {
      venue: 'oldVenue'
    };
    
    it('returns the state with chosen venue', () => {
      expect(reducer(state, {type: 'CHOOSE_SLOT', payload: 'newVenue'})).to.deep.equal({venue: 'newVenue'});
    });
  });

  describe('on CHANGE_DATE action', () => {
    const state = {
      date: ''
    }
    
    it('returns the state with chosen date', () => {
      expect(reducer(state, {type: 'CHANGE_DATE', payload: '30/12/2016'})).to.deep.equal({date: '30/12/2016'});
    });
  });

  describe('on SPORTS_LIST_VISIBILITY action', () => {
    const state = {
      sportsListVisible: false
    };
    
    it('returns the state toggled sport list', () => {
      expect(reducer(state, {type: 'SPORTS_LIST_VISIBILITY'})).to.deep.equal({sportsListVisible: !state.sportsListVisible});
    });
  });

  describe('on CHANGE_SPORT action', () => {
    const state = {
      sport: 'tennis'
    };
    
    it('returns the state with chosen sport', () => {
      expect(reducer(state, {type: 'CHANGE_SPORT', payload: 'golf'})).to.deep.equal({sport: 'golf'});
    });
  });

  describe('on ON_SLOT_SELECT action', () => {
    const state = {
      activeSlot: ''
    };
    
    it('returns the state with chosen slot', () => {
      expect(reducer(state, {type: 'ON_SLOT_SELECT', payload: 720})).to.deep.equal({activeSlot: 720});
    });
  });

  describe('on ON_COURT_SELECT action when court is new', () => {
    const state = {
      selectedCourts: []
    };
    
    it('returns the state with chosen court', () => {
      expect(reducer(state, {type: 'ON_COURT_SELECT', payload: {id: 1}})).to.deep.equal({selectedCourts: [{id: 1}]});
    });
  });

  describe('on ON_COURT_SELECT action when court is not new', () => {
    const state = {
      selectedCourts: [{id: 1}, {id: 2}]
    };
    
    it('returns the state without chosen court', () => {
      expect(reducer(state, {type: 'ON_COURT_SELECT', payload: state.selectedCourts[1]})).to.deep.equal({selectedCourts: [{id: 1}]});
    });
  });

  describe('on UPDATE_VENUE_SLOTS action', () => {
    const state = {
      slots: {}
    };
    
    it('returns the state with venues slots', () => {
      expect(reducer(state, {type: 'UPDATE_VENUE_SLOTS', payload: {available: {'17:00': {available_courts: [1,2,3]},'18:00': {available_courts: [1,2]}}}})).to.deep.equal({slots: {available: {'17:00': {available_courts: [1,2,3]},'18:00': {available_courts: [1,2]}}}});
    });
  });

  describe('on TOGGLE_LOADED action', () => {
    const state = {
      loaded: false
    };

    it('returns the state with chosen slot', () => {
      expect(reducer(state, {type: 'TOGGLE_LOADED'})).to.deep.equal({loaded: !state.loaded});
    });
  });

  describe('on CLEAR_STATE action', () => {
    const initialState = {
      venue: {},
      date: '',
      sportsListVisible: false,
      sport: '',
      activeSlot: '',
      slots: {},
      selectedCourts: [],
      loaded: true,
      cards: [],
      selectedCard: '',
      duration: ''
    }

    const state = {
      date: '12/12/2022',
      loaded: false
    }

    it('returns initial state', () => {
      expect(reducer(state, {type: 'CLEAR_STATE'})).to.deep.equal(initialState);
    });
  });

  describe('on CLEAR_SELECTED_COURTS action', () => {
    const state = {
      selectedCourts: [1, 2, 3]
    };
    
    it('returns the state with empty selectedCourts', () => {
      expect(reducer(state, {type: 'CLEAR_SELECTED_COURTS'})).to.deep.equal({selectedCourts: []});
    });
  });

  describe('on SAVE_CARDS action', () => {
    const state = {
      cards: []
    };
    
    it('returns the state with fetched cards', () => {
      expect(reducer(state, {type: 'SAVE_CARDS', payload: [1,2,3]})).to.deep.equal({cards: [1,2,3]});
    });
  });

  describe('on SELECT_CARD action', () => {
    const state = {
      selectedCard: ''
    };
    
    it('returns the state with selected card', () => {
      expect(reducer(state, {type: 'SELECT_CARD', payload: 'card_19OENwI61cakPIniooCxe2cL'})).to.deep.equal({selectedCard: 'card_19OENwI61cakPIniooCxe2cL'});
    });
  });

  describe('on UPDATE_DURATION action', () => {
    const state = {
      duration: ''
    };
    
    it('returns the state with selected duration', () => {
      expect(reducer(state, {type: 'UPDATE_DURATION', payload: 120})).to.deep.equal({duration: 120});
    });
  });
})

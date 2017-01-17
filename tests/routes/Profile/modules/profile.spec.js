import {
  ON_CANCEL_RESERVATION_SUCCESS,
  TOGGLE_ALERT,
  cancelReservationSuccess,
  toggleAlert,
  default as profileReducer
} from 'routes/Profile/modules/profile'

describe('(Redux Module) Profile', () => {
  it('Should export a constant ON_CANCEL_RESERVATION_SUCCESS.', () => {
    expect(ON_CANCEL_RESERVATION_SUCCESS).to.equal('ON_CANCEL_RESERVATION_SUCCESS')
  })

  describe('cancelReservationSuccess action', () => {
    it('has the correct type', () => {
      const action = cancelReservationSuccess();
      expect(action.type).to.equal(ON_CANCEL_RESERVATION_SUCCESS);
    });

    it('has the correct payload', () => {
      const action = cancelReservationSuccess({ id: 3345, booking_type: 'online' });
      expect(action.payload).to.deep.equal({ id: 3345, booking_type: 'online' });
    });
  })

  it('Should export a constant TOGGLE_ALERT.', () => {
    expect(TOGGLE_ALERT).to.equal('TOGGLE_ALERT')
  })

  describe('toggleAlert action', () => {
    it('has the correct type', () => {
      const action = toggleAlert();
      expect(action.type).to.equal(TOGGLE_ALERT);
    });

    it('has the correct payload', () => {
      const action = toggleAlert({ id: 3345, booking_type: 'online' });
      expect(action.payload).to.deep.equal({ id: 3345, booking_type: 'online' });
    });
  })

  describe('reducer', () => {
    it('should remove reservation on ON_CANCEL_RESERVATION_SUCCESS', () => {
      const state = {
        content: {
          future_reservations: [
            { id: 3303, booking_type: 'online' },
            { id: 3345, booking_type: 'online' },
            { id: 3347, booking_type: 'online' }
          ]
        }
      };
      expect(profileReducer(state, { type: 'ON_CANCEL_RESERVATION_SUCCESS', payload: state.content.future_reservations[1] }))
      .to.deep.equal({
        content: {
          future_reservations: [
            { id: 3303, booking_type: 'online' },
            { id: 3347, booking_type: 'online' }
          ]
        }
      });
    })
  })
})

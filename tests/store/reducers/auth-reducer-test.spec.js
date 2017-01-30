import reducer from '../../../src/store/reducers/auth-reducer'

describe('auth-reducer', () => {
  const initialState = {
    login: {
      credentials: {}
    },
    register: {
      credentials: {}
    },
    edit: {},
    messages: {},
    errors: {},
    authenticated: false,
    isRequestingToUpdatePassword: false,
    isRequestingToCreatePassword: false,
    isRequestingToEditProfile: false,
    isRequestingToResendConfirmation: false,
    isRequestingToResetPassword: false
  }

  it('returns its initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  })

  it('returns isRequestingToEditProfile: true on EDIT_PROFILE_REQUEST', () => {
    const state = {
      isRequestingToEditProfile: false
    }
    expect(reducer(state, { type: 'EDIT_PROFILE_REQUEST' })).to.deep.equal({ isRequestingToEditProfile: true });
  })

  it('test EDIT_PROFILE_SUCCESS', () => {
    const state = {
      isRequestingToEditProfile: true
    }
    expect(reducer(state, { type: 'EDIT_PROFILE_SUCCESS', user: 890, message: 'Updated' })).to.deep.equal({ isRequestingToEditProfile: false, user: 890, messages: { type: 'success', message: 'Updated' } });
  })

   it('test EDIT_PROFILE_FAIL', () => {
    const state = {
      isRequestingToEditProfile: true
    }
    expect(reducer(state, { type: 'EDIT_PROFILE_FAIL', reason: 'Fail' })).to.deep.equal(Object.assign({}, initialState, { isRequestingToEditProfile: false, messages: { type: 'fail', reason: 'Fail' } }));
  })
})

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/api/auth-api'
import * as types from '../../src/actions/action-types'
import { hide, show } from 'redux-modal'
import { change } from 'redux-form'
import moxios from 'moxios'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('auth api', () => {
  it('creates LOGIN_SUCCESS when user is authenticated successfully', () => {
    const email = 'tido.jackson@example.com';
    const password = '123123123';
    const onSuccess = 'payment';
    const user = {
      city: "",
      email: "test@test.com",
      exp: 1484335965,
      first_name: "test@test.com",
      id: 890,
      image: null,
      last_name: "test@test.com",
      outstanding_balance: 0,
      phone_number: "",
      provider: null,
      street_address: "wk",
      stripe_id: "cus_9ggQurFDuYVdsY",
      uid: null,
      zipcode: ""
    }

    const expectedActions = [
      { type: types.LOGIN_SUCCESS, user },
      hide('login'),
      show(onSuccess)
    ]
    const store = mockStore({ user: {} })

    store.dispatch(actions.login({ credentials: { email, password }, onSuccess }))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODkwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJmaXJzdF9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImxhc3RfbmFtZSI6InRlc3RAdGVzdC5jb20iLCJwcm92aWRlciI6bnVsbCwidWlkIjpudWxsLCJpbWFnZSI6bnVsbCwicGhvbmVfbnVtYmVyIjoiIiwic3RyaXBlX2lkIjoiY3VzXzlnZ1F1ckZEdVlWZHNZIiwic3RyZWV0X2FkZHJlc3MiOiJ3ayIsInppcGNvZGUiOiIiLCJjaXR5IjoiIiwib3V0c3RhbmRpbmdfYmFsYW5jZSI6MC4wLCJleHAiOjE0ODQzMzU5NjV9.uiK_8EN-AxS54SbSCqo3FFm7qykuD0y-uM8sLL738hc"
        }
      }).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
  })

  it('creates REGISTER_SUCCESS when user is registred successfully', () => {
    const email = 'tido.jackson@example.com';
    const first_name = 'tido';
    const last_name = 'jackson';
    const password = '123123123';
    const onSuccess = 'payment';
    const user = {
      city: "",
      email: "test@test.com",
      exp: 1484335965,
      first_name: "test@test.com",
      id: 890,
      image: null,
      last_name: "test@test.com",
      outstanding_balance: 0,
      phone_number: "",
      provider: null,
      street_address: "wk",
      stripe_id: "cus_9ggQurFDuYVdsY",
      uid: null,
      zipcode: ""
    }

    const expectedActions = [
      { type: types.REGISTER_SUCCESS, user },
      hide('register'),
      show(onSuccess)
    ]
    const store = mockStore({ user: {} })

    store.dispatch(actions.register({ credentials: {user: { email, password, first_name, last_name, password_confirmation: password } }, onSuccess }))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODkwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJmaXJzdF9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImxhc3RfbmFtZSI6InRlc3RAdGVzdC5jb20iLCJwcm92aWRlciI6bnVsbCwidWlkIjpudWxsLCJpbWFnZSI6bnVsbCwicGhvbmVfbnVtYmVyIjoiIiwic3RyaXBlX2lkIjoiY3VzXzlnZ1F1ckZEdVlWZHNZIiwic3RyZWV0X2FkZHJlc3MiOiJ3ayIsInppcGNvZGUiOiIiLCJjaXR5IjoiIiwib3V0c3RhbmRpbmdfYmFsYW5jZSI6MC4wLCJleHAiOjE0ODQzMzU5NjV9.uiK_8EN-AxS54SbSCqo3FFm7qykuD0y-uM8sLL738hc"
        }
      }).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
  })

  it('creates LOG_OUT when user click logout', () => {
    const expectedActions = [{ type: types.LOG_OUT }];
    const store = mockStore({ user: {} });
    store.dispatch(actions.logout())
    expect(store.getActions()).to.deep.equal(expectedActions)
  })

  describe('test update info action', () => {
    const credentials = {
      city:"Helsinki",
      email:"test@test.com",
      first_name:"Test12",
      last_name:"test@test.com",
      phone_number:"",
      street_address:"Address",
      zipcode:"00120"
    };
    const userId = 890;

    it('creates EDIT_PROFILE_SUCCESS when update info successful', () => {
      const response = {
        user:{
          id:890,
          email:"test@test.com",
          created_at:"2016-11-18T13:19:42.229Z",
          updated_at:"2017-01-09T07:59:59.217Z",
          first_name:"Test12",
          last_name:"test@test.com",
          provider:null,
          uid:null,
          image:null,
          phone_number:"",
          street_address:"Address",
          zipcode:"00120",
          city:"Helsinki",
          outstanding_balance:0.0
        },
        message:"Käyttäjäprofiilin päivitetty onnistuneesti"
      }

      const expectedActions = [
        { type: types.EDIT_PROFILE_REQUEST },
        { type: types.EDIT_PROFILE_SUCCESS, user: response.user, message: response.message}
      ];

      const store = mockStore({ user: {} });
      store.dispatch(actions.update(credentials, userId))
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response
        }).then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
      })
    })

    it('creates EDIT_PROFILE_FAIL when update info failed', () => {
      const errors = ['Something went wrong', 'Something else'];

      const expectedActions = [
        { type: types.EDIT_PROFILE_REQUEST },
        { type: types.EDIT_PROFILE_FAIL, reason: errors.join(', ') }
      ];

      const store = mockStore({ user: {} });
      store.dispatch(actions.update(credentials, userId))
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 422,
          response: {
            data: {
              errors
            }
          }
        }).then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
      })
    })
  })
  describe('test updatePassword action', () => {
    const userId = 890;
    it('doesn\'t send request when current passoword is empty', () => {
      const credentials = {
        current_password: ''
      }
      const store = mockStore({ user: {} });
      store.dispatch(actions.updatePassword(credentials, userId))
      expect(store.getActions()).to.deep.equal([])
    })

    it('doesn\'t send request when password_confirm is empty', () => {
      const credentials = {
        current_password: '123123',
        password: '124124',
        password_confirm: ''
      }
      const store = mockStore({ user: {} });
      store.dispatch(actions.updatePassword(credentials, userId))
      expect(store.getActions()).to.deep.equal([])
    })

    it('doesn\'t send request when new password is empty', () => {
      const credentials = {
        current_password: '123123',
        password: '',
        password_confirm: '124124'
      }
      const store = mockStore({ user: {} });
      store.dispatch(actions.updatePassword(credentials, userId))
      expect(store.getActions()).to.deep.equal([])
    })

    it('doesn\'t send request when new password don\'t match password_confirm and resets fields', () => {
      const credentials = {
        current_password: '123123',
        password: '124125',
        password_confirm: '124124'
      }

      const expectedActions = [
        change('updatepassword', 'password', ''),
        change('updatepassword', 'password_confirm', '')
      ];

      const store = mockStore({ user: {} });
      store.dispatch(actions.updatePassword(credentials, userId))
      expect(store.getActions()).to.deep.equal(expectedActions)
    })

    it('doesn\'t send request when new password is less than 8 symbols', () => {
      const credentials = {
        current_password: '123123',
        password: '124125',
        password_confirm: '124125'
      }

      const store = mockStore({ user: {} });
      store.dispatch(actions.updatePassword(credentials, userId))
      expect(store.getActions()).to.deep.equal([])
    })

    it('it returns TOGGLE_PASSWORD_UPDATE and hide modal on success', () => {
      const credentials = {
        current_password: '123123',
        password: '12341234',
        password_confirm: '12341234'
      }

      const store = mockStore({ user: {} });

      const expectedActions = [
        { type: 'TOGGLE_PASSWORD_UPDATE' },
        { type: 'TOGGLE_PASSWORD_UPDATE' },
        { type: '@@redux-form/DESTROY', meta: { form: 'updatepassword' } }
      ];

      store.dispatch(actions.updatePassword(credentials, userId))
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();

        request.respondWith({
          status: 200,
          response: {
            data: {
              message: 'Success!'
            }
          }
        }).then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
      })
    })

    it('it returns TOGGLE_PASSWORD_UPDATE on fail and don\'t close modal', () => {
      const credentials = {
        current_password: '123123',
        password: '12341234',
        password_confirm: '12341234'
      }

      const store = mockStore({ user: {} });

      const expectedActions = [
        { type: 'TOGGLE_PASSWORD_UPDATE' },
        { type: 'TOGGLE_PASSWORD_UPDATE' }
      ];

      store.dispatch(actions.updatePassword(credentials, userId))
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();

        request.respondWith({
          status: 422,
          response: {
            data: {
              message: 'Wrong current password'
            }
          }
        }).then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
      })
    })
  })
})

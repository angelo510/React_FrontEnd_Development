import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import EditInformation from 'routes/Profile/components/EditInformation';

describe('EditInformation', () => {
  const mockStore = configureStore();
  const initialState = {
    auth: {
      user: {
        id: 890
      },
      isRequestingToUpdatePassword: false
    },
    modal: {
      updatepassword: {
        show: true,
        props: {}
      }
    },
    i18n: {
      locale: 'fi'
    },
    form: {}
  }
  const props = {
    cards: [],
    getCards: sinon.spy(),
    handleSubmit: sinon.stub().returns(Promise.resolve()),
    user: {
      "first_name": 'Stas',
      "last_name": 'Buzunko',
      "email": 'buzunkostas@gmail.com',
      "phone_number": '375257336883',
      "street_address": 'Mao 2',
      "zipcode": 23532,
      "city": 'Phuket'
    }
  };
  const store = mockStore(initialState);

  const wrapper = mount(<Provider store={store}><EditInformation {...props} /></Provider>)

  it('editinformation initialized with correct values', () => {
    const action = store.getActions().filter(action => action.type === '@@redux-form/INITIALIZE' &&
      action.meta.form === 'editinformation')[0];
    expect(action.payload).to.deep.equal(props.user)
  })

  it('Submit isn\'t called', () => {
    expect(props.handleSubmit.callCount).to.equal(0)
  })

  it('Submit is called', () => {
    const form = wrapper.find('form');
    form.simulate('submit')
    expect(props.handleSubmit.callCount).to.equal(1)
  })
})

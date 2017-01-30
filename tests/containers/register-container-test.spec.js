import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TestUtils from 'react-addons-test-utils'
import Register from '../../src/components/Modals/Register'
import ConnectedRegister from '../../src/containers/Modals/Register'

describe('Register modal', () => {
  const mockStore = configureStore();
  const initialState = {
    modal: {
      register: {
        show: true
      }
    },
    auth: {
      messages: []
    },
    i18n: {
      locale: 'fi'
    }
  }
  const store = mockStore(initialState);

  describe('state provided by the store to success', () => {
    it('passes down props correctly', () => {
      const connectedApp = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedRegister /></Provider>);
      const app = TestUtils.findRenderedComponentWithType(connectedApp, Register);
    });
  });
});

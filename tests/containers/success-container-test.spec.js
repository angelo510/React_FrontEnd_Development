import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TestUtils from 'react-addons-test-utils'
import Success from '../../src/components/Modals/Success'
import ConnectedSuccess from '../../src/containers/Modals/Success'

describe('Success modal', () => {
  const mockStore = configureStore();
  const initialState = {
    auth: {
      user: {
        first_name: 'Stas',
        id: 917
      }
    },
    modal: {
      success: {
        show: true
      }
    },
    i18n: {
      locale: 'fi'
    }
  }
  const store = mockStore(initialState);

  describe('state provided by the store to success', () => {
    it('passes down props correctly', () => {
      const connectedApp = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedSuccess /></Provider>);
      const app = TestUtils.findRenderedComponentWithType(connectedApp, Success);
      expect(app.props.user).to.deep.equal(initialState.auth.user);
    });
  });
});

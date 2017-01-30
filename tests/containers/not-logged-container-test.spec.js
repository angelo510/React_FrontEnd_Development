import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TestUtils from 'react-addons-test-utils'
import NotLogged from '../../src/components/Modals/NotLogged'
import ConnectedNotLogged from '../../src/containers/Modals/NotLogged'
import { show } from 'redux-modal'

describe('NotLogged modal', () => {
  const mockStore = configureStore();
  const initialState = {
    modal: {
      notlogged: {
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
      const connectedApp = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedNotLogged /></Provider>);
      const app = TestUtils.findRenderedComponentWithType(connectedApp, NotLogged);
      expect(app.props.openModal()).to.deep.equal(show());
    });
  });
});

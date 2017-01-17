import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

const fi = require('../static/locales/fi.yaml');
const en = require('../static/locales/en.yaml');
// const locales = require('../static/locales/locales.yaml')

class AppContainer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    /*
      i18n configuration
    */
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations({ fi, en }));
    // store.dispatch(loadTranslations(locales));
    store.dispatch(setLocale('fi'));

    return (
      <Provider store={store}>
        <div className='flex-col flex'>
          <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

AppContainer.propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
}

export default AppContainer

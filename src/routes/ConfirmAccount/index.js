import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'confirmation',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ConfirmAccount = require('./containers/ConfirmAccountViewContainer').default
      const reducer = require('../../store/reducers/auth-reducer').default
      injectReducer(store, { key: 'confirmation', reducer })
      cb(null, ConfirmAccount)
    }, 'confirmation')
  }
})

import { injectReducer } from '../../store/reducers'
import { default as searchgrid } from '../Home/modules/searchgrid'

export default (store) => ({
  path : 'venues/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Venue = require('./components/VenuePage').default
      const reducer = require('./modules/venue').default
      injectReducer(store, {
        key: 'venue',
        reducer
      })
      injectReducer(store, { key: 'searchgrid', reducer: searchgrid })

      cb(null, Venue)
    }, 'venue')
  }
})

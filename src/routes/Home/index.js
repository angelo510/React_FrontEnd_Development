import { injectReducer } from '../../store/reducers'
import HomeView from './components/HomeView'
import { default as reducer } from './modules/searchgrid'

// Sync route definition
export default (store) => ({
  // component : HomeView
  getComponent (nextState, cb) {
    injectReducer(store, { key: 'searchgrid', reducer })
    cb(null, HomeView)
  }
})

// // Sync route definition
// export default (store) => ({
//   path : '/',
//   getComponent (nextState, cb) {
//       require.ensure([], (require) => {
//         const HomeView = require('./components/HomeView')
//         const reducer = require('./modules/searchgrid')
//         injectReducer(store, { key: 'searchgrid', reducer })
//         cb(null, HomeView)
//       }, 'homeview')
//     }}
//   )

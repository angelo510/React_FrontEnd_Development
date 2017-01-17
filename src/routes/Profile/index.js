import { injectReducer } from '../../store/reducers'
import auth from 'react-router-redux-auth'

export default store => {
  const route = {
    path: 'profile',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        const Profile = require('./components/ProfileView').default
        const reducer = require('./modules/profile').default

        injectReducer(store, {
          key: 'profile',
          reducer
        })
        cb(null, Profile)
      }, 'profile')
    }
  }

  return auth(store, route, 'auth.authenticated')
}

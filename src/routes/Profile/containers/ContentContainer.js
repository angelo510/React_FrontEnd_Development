import { connect } from 'react-redux'
import Content from '../components/Content'
import * as actions from '../modules/profile'
import { update } from '../../../api/auth-api'
import { cancelReservation } from '../../../api/reservation-api'
import { resellReservation } from '../../../api/reservation-api'

const mapStateToProps = state => ({
  active: state.profile.active,
  filter: state.profile.filter,
  content: state.profile.content,
  pageNumber: state.profile.pageNumber,
  perPage: state.profile.perPage,
  showAlert: state.profile.showAlert,
  reservationToCancel: state.profile.reservationToCancel,
  userId: state.auth.user.id
})

const mapDispatchToProps = {
  getData: actions.getUserReservations,
  update,
  cancelReservation,
  resellReservation,
  toggleAlert: actions.toggleAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)

import { connect } from 'react-redux'
import { show } from 'redux-modal'
import Payment from '../../components/Modals/Payment/'
import { bookWithoutPayment, pay, getCards, addCard } from '../../api/reservation-api'
import { selectCard, clearState } from '../../actions/booking-actions'

const mapDispatchToProps = {
  bookWithoutPayment,
  pay,
  openModal: show,
  getCards,
  addCard,
  selectCard,
  clearState
}
const mapStateToProps = state => ({
  loaded: !state.booking.loaded,
  user: state.auth.user,
  selectedCourts: state.booking.selectedCourts,
  duration: state.location.query.duration || state.booking.duration,
  date: state.booking.date || state.location.query.date,
  cards: state.booking.cards,
  selectedCard: state.booking.selectedCard,
  location: state.location.pathname,
  locale: state.i18n.locale
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)

import { connect } from 'react-redux'
import VenueView from '../components/VenueView'
import { loadVenue } from '../modules/venue'
import { fetchSingleVenue, getSportNames } from '../../../api/venue-api'
import { chooseSlot, onSlotSelect, changeSport, updateDuration, changeDate } from '../../../actions/booking-actions'
import { show } from 'redux-modal'

const mapStateToProps = (state, ownProps) => ({
  venue: state.venue.venue,
  imageIndex: state.venue.imageIndex,
  pathname: state.routing.locationBeforeTransitions.pathname.split("/")[2]
})

const mapDispatchToProps = {
  loadVenue,
  fetchSingleVenue,
  show,
  chooseSlot,
  onSlotSelect,
  changeSport,
  getSportNames,
  updateDuration,
  changeDate
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueView)

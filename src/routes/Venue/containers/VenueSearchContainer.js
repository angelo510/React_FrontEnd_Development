import { connect } from 'react-redux'
import VenueSearch from '../components/VenueSearch'

const mapStateToProps = (state, ownProps) => ({
  venue: state.venue.venue,
  locale: state.i18n.locale,
  sports: state.venues.all_sports
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueSearch)

import { connect } from 'react-redux'
import VenueCarousel from '../components/VenueCarousel'
import { getVenues } from '../../../actions/venue-actions'

/*
initialState
{
  all_venues: [],
  all_sports: []
}
*/

const mapStateToProps = (state) => ({
  all_venues : state.venues.all_venues
})

const mapDispatchToProps = {
  getVenues
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueCarousel)

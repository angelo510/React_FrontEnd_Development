import { connect } from 'react-redux'
import {
    selectActiveSport,
    getSportNames,
    toggleSportSelectionMenu,
    getVenues
} from '../../../actions/venue-actions'

import VenueCategory from '../components/VenueCarousel/VenueCategory'

const mapStateToProps = (state) => ({
  all_sports : state.venues.all_sports,
  activeSport : state.venues.activeSport,
  selectingNewSport: state.venues.selectingNewSport
})

const mapDispatchToProps = {
  getSportNames,
  selectActiveSport,
  toggleSportSelectionMenu,
  getVenues
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueCategory)

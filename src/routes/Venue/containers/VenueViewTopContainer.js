import { connect } from 'react-redux'
import VenueViewTop from '../components/VenueViewTop'
import { changeImage } from '../modules/venue'
import { show } from 'redux-modal'

const mapStateToProps = (state, ownProps) => ({
  imageIndex: state.venue.imageIndex,
  pathname: state.routing.locationBeforeTransitions.pathname.split("/")[2]
})

const mapDispatchToProps = {
  changeImage,
  show
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueViewTop)

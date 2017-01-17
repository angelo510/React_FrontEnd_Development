import { connect } from 'react-redux'
import MainVenueSearch from '../../components/MainVenueSearch'
import { onSubmit } from '../../modules/searchgrid'

const mapDispatchToProps = {
  onSubmit
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainVenueSearch)

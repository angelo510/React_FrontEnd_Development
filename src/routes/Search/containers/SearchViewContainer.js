import { connect } from 'react-redux'
import SearchView from '../components/SearchView'
import { getSportNames } from '../../../api/venue-api'

const mapDispatchToProps = { getSportNames }
const mapStateToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(SearchView)

import { connect } from 'react-redux'
import { } from '../modules/search'
import SearchResults from '../components/SearchResults'
import { chooseSlot, onSlotSelect } from '../../../actions/booking-actions'
import { initResults } from '../../Home/modules/searchgrid'
import { show } from 'redux-modal'

const mapDispatchToProps = {
  chooseSlot,
  show,
  onSlotSelect,
  initResults
}

const mapStateToProps = state => ({
  searchResults: state.searchgrid.searchResults || [],
  searching: state.searchgrid.searching,
  queryParams: state.location.query,
  pageNumber: state.search.pageNumber,
  perPage: state.search.perPage
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

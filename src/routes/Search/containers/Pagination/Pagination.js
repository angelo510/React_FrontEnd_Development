import { connect } from 'react-redux'
import { moveToPage } from '../../modules/search'
import Pagination from '../../../../components/Pagination'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onClick: pageNumber => dispatch(moveToPage(pageNumber))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)

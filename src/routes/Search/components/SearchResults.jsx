import React, { PropTypes, Component } from 'react'
import utils from '../../../utils'
import Fa from 'react-fontawesome'
import Pagination from '../containers/Pagination'
import SearchResultItem from './SearchResultItem'
import Booking from '../../../containers/Modals/Booking'
import NotLogged from '../../../containers/Modals/NotLogged'
import Payment from '../../../containers/Modals/Payment'
import Success from '../../../containers/Modals/Success'

import './SearchView.scss'

class SearchResults extends Component {

  componentDidMount() {
    const { queryParams, initResults } = this.props

    if (Object.keys(queryParams).length) {
      initResults()
    }
  }

  render() {
    const { searchResults, searching, show, chooseSlot, onSlotSelect, pageNumber, perPage } = this.props
    const pageSearchResults = utils.chunkify(searchResults, perPage);
    const maxPage = pageSearchResults.length - 1

    return (
      <div>
        <div className="mhs mbm">
          <div className="venue-results">
            {searching &&
            <Fa className="loading color-primary-brand"
              name="refresh"
              spin={true}
              stack="2x" />
          }
            {!searching && pageSearchResults.length > 0 &&
            <div className="venue-results-grid">
              {pageSearchResults[pageNumber].map((result, index) =>
                <SearchResultItem
                  chooseSlot={chooseSlot}
                  key={index}
                  onSlotSelect={onSlotSelect}
                  result={result}
                  show={show} />
            )}
            </div>
          }
          </div>
          <Booking />
          <NotLogged />
          <Payment />
          <Success />
        </div>
        {!searching && pageSearchResults.length > 1 &&
        <Pagination
          className="mhl mbm"
          maxPage={maxPage}
          pageNumber={pageNumber}
          perPage={perPage}
          totalItems={searchResults.length} />}
      </div>
    )
  }
}

SearchResults.propTypes = {
  chooseSlot: PropTypes.func.isRequired,
  initResults: PropTypes.func.isRequired,
  onSlotSelect: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  show: PropTypes.func.isRequired,
  queryParams: PropTypes.object,
  pageNumber: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
}

export default SearchResults;

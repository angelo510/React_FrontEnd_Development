import React, { Component, PropTypes } from 'react';
import utils from '../../../utils'
import VenueCard from './VenueCard'
import Pagination from '../containers/Pagination'
import EditInformation from '../containers/EditInformationContainer'
import Fa from 'react-fontawesome'
import Text from '../../../containers/Text'
import SweetAlert from 'sweetalert-react';

class Content extends Component {
  componentDidMount() {
    this.props.getData()
  }

  renderElements = content => {
    const { filter, pageNumber, perPage } = this.props
    if (!content[filter]) {
      return (
        <div style={{ width: '0%', margin: 'auto', paddingTop: '12rem' }}>
            <Fa className="loading color-primary-brand"
              name="refresh"
              spin={true}
              stack="2x" />
        </div>)
    }

    const chunkifiedVenueCards = utils.chunkify(content[filter], perPage)
    const currentPage = chunkifiedVenueCards[pageNumber]
    const maxPage = chunkifiedVenueCards.length - 1

    if (chunkifiedVenueCards.length === 0) {
      return <h3>No Results Found</h3>
    }

    return (
      <div>

        { currentPage.map((value, i) => <VenueCard data={value} cancel={this.props.resellReservation} key={i} />) }
        {chunkifiedVenueCards.length > 1 && <Pagination
          maxPage={maxPage}
          pageNumber={pageNumber}
          perPage={perPage}
          totalItems={content[filter].length} />}
      </div>)
  }


  render() {
    const { active, content, filter, update, userId, showAlert, toggleAlert, cancelReservation, reservationToCancel } = this.props

    switch (active) {
      case 'edit':
        return <EditInformation onSubmit={(credentials)=>{update(credentials, userId)}}/>
      default:
        return (
          <div className="max-width">
            { this.renderElements(content) }
            <SweetAlert
              show={showAlert}
              title="Are you sure you want to cancel?"
              showCancelButton
              onConfirm={() => cancelReservation(reservationToCancel)}
              onCancel={toggleAlert}
              onEscapeKey={toggleAlert}
            />
          </div>)
    }
  }
}

Content.propTypes = {
  active: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

export default Content;

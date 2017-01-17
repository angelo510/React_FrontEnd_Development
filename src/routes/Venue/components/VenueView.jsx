import React, { Component } from 'react'
import moment from 'moment'
import Navigation from '../../../containers/Navigation'
import OwlCarousel from 'react-owl-carousel'
import VenueViewTop from '../containers/VenueViewTopContainer'
import VenueViewMiddle from './VenueViewMiddle'
import VenueViewBottom from './VenueViewBottom'
import Booking from '../../../containers/Modals/Booking'
import NotLogged from '../../../containers/Modals/NotLogged'
import Payment from '../../../containers/Modals/Payment'
import Success from '../../../containers/Modals/Success'
import FA from 'react-fontawesome'


class VenueView extends Component {
  componentDidMount() {
    const { loadVenue, getSportNames } = this.props
    loadVenue(this.props.pathname)
    getSportNames();
  }

  onSearchSubmit(e) {
    e.preventDefault()
    const { venue, fetchSingleVenue, show, chooseSlot, onSlotSelect, changeSport, updateDuration, changeDate } = this.props

    const fields = Array.from(e.target.elements);
    const params = {}

    fields
      .filter(v => v.name !== v.value)
      .forEach(v => {
        params[v.name] = v.value
      });

    fetchSingleVenue({ ...params, venue_id: venue.venue_id });
    chooseSlot(venue.venue_name);
    const slot = moment.duration(params.time).asMinutes();
    updateDuration(params.duration);
    onSlotSelect(slot)
    changeSport(params.sport_name)
    changeDate(params.date);
    show('booking');
  }


  renderViews() {
    const { venue } = this.props
    if (venue) {
      return(
        <div>
          <VenueViewTop venue={venue} />
          <VenueViewMiddle venue={venue} onSubmit={(e) => this.onSearchSubmit(e)} />
          <VenueViewBottom venue={venue} />
        </div>
      )
    } else {
      return (
        <div style={{ marginTop: '200px', paddingBottom: '1000px' }}>
          <FA name='refresh'
            stack='2x'
            className='color-primary-brand'
            spin />
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <header>
          <Navigation theme='light' />
        </header>
        <main className='venue-page'>
          {this.renderViews()}
        </main>
        <Booking />
        <NotLogged />
        <Payment />
        <Success />
      </div>
    )
  }
}

export default VenueView

import React from 'react'
import VenueSearch from '../containers/VenueSearchContainer'
import Text from '../../../containers/Text'

const VenueViewMiddle = ({ venue, onSubmit }) =>
  <div className="venue-middle flex-row flex-hc pam color-bg-white">
    <div className="max-width flex-row flex-col-mobile mts-mobile mbl-desktop">
      <div className="venue-middle__about-section prl">
        <h3 className="venue-section-title">
          <Text text="pages.venues.about_venue" />
        </h3>
        <div>
          { venue.description }
        </div>
      </div>

      <div className="venue-middle__check-times-section mtm-mobile mbl-mobile">
        <h3 className="venue-section-title">
          <Text text="pages.venues.check_times" />
        </h3>
        <div className="color-bd-lighter-grey" style={{ minWidth: '16rem' }}>
          <VenueSearch onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  </div>


export default VenueViewMiddle

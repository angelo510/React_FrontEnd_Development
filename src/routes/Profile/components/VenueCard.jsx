import React, { PropTypes } from 'react';
import VenueInformation from '../../../components/Venues/VenueInformation'
import Text from '../../../containers/Text'

// TODO : CancelLink: Bool: cancel true --> can cancel Bool: cancel false -->
// can't cancel Cancel by id

const VenueCard = ({ data, cancel }) =>
  <div className="flex-col flex-row-desktop mvm mvs-mobile">
    <div className="flex flex-row flex-vs">
      <VenueInformation venue={data.venue} />
    </div>
    <div className="flex">
      <div className="flex-row flex-hb color-white color-bg-primary-brand pam">
        <div className="em-high">
          { data.month }
          <span className="t3">
            { ` ${data.day} ` }
          </span>
          { data.year } {data.cancelled ? <b><Text text="pages.venues.cancelled" /></b> : null}
        </div>
        <div>
          { data.court.sport }
        </div>
      </div>

      <div className="color-bg-white pam">
        <div className="color-dark-grey t3 em-high text-uc">
          <a href={data.venue.link}>
            {data.venue.name}
          </a>
        </div>
        <div className="color-primary-brand mbm">
          {data.court.court_name}
        </div>

        <div className="mvs">
          <i className="icon-clock color-primary-brand mrs" /> {data.start_time} - {data.end_time}
        </div>
        <div className="mvs">
          <span className="color-primary-brand mrs"> € &nbsp; </span>
          { data.price } | { data.payment_type }
        </div>

        <div className="flex-row t5 color-primary-brand mtm">
          { data.cancelLink ?
            <div className="prs" onClick={() => cancel(data)}>
              <a href="#"> <Text text="pages.venues.resell_reservation_link" /> </a>
            </div>
            :
            <div className="prs" title={data.cancelMessage}>
              <a href="#"> <Text text="pages.venues.cant_resell_reservation_message" /> </a>
            </div>
            }
          <div className="color-bdl-lighter-grey pls">
            <a href={data.calendarLink}>
              <Text text="pages.venues.add_to_calendar" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  ;

VenueCard.propTypes = {}

export default VenueCard;

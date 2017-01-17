import React from 'react'

const VenueWindowContent = ({venue}) => (
  <div>
    <div className='venue-attribute'>
      <i className="icon-map"/>
      <div className='venue-attribute-text'>
        { venue.street },
        <br/>
        { venue.zip } { venue.city }
      </div>
    </div>

    <div className='venue-attribute'>
      <i className="icon-phone"/>
      <a className='venue-attribute-text' href=''>{ venue.phone_number }</a>
    </div>

    <div className='venue-attribute'>
      <i className="icon-site"/>
      <a className='venue-attribute-text' href={'https://' + venue.website }>{ venue.website }</a>
    </div>

    <div className='venue-attribute'>
      <i className="icon-parking"/>
      <a className='venue-attribute-text' href=''>{ venue.parking_info }</a>
    </div>

    <div className='venue-attribute'>
      <i className="icon-transport"/>
      <a className='venue-attribute-text' href=''>{ venue.transit_info }</a>
    </div>
  </div>
);

export default VenueWindowContent

import React from 'react';


// todo: use this in the search result
const VenueInformation = ({venue}) => {
  return (
    <div className='venue-information' style={{backgroundImage: 'url(' + venue.imageUrl + ')'}}>
      <div className='venue-information__info'>
        <div className='venue-detail full-height'>
          <div className='t3 em-high text-uc'>Info</div>

          <div className='venue-attribute'>
            <i className='icon-map'/>
            <div className='venue-attribute-text'>
              { venue.street },
              <br/>
              { venue.zip } { venue.city }
            </div>
          </div>

          <div className='venue-attribute'>
            <i className='icon-phone'/>
            <a className='venue-attribute-text' href=''>{ venue.phone_number }</a>
          </div>

          <div className='venue-attribute'>
            <i className='icon-site'/>
            <a className='venue-attribute-text' href={ venue.website }>{ venue.website }</a>
          </div>
        </div>
      </div>
    </div>
  );
};

VenueInformation.propTypes = {
  venue: React.PropTypes.object.isRequired
}

export default VenueInformation;

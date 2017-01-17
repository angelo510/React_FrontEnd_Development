import React, {PropTypes} from 'react'
const VenueCarouselItem = ({venue}) => {
  const {id, venue_name, image, street, zip, city, phone_number, website, lowest_price, url} = venue
  return (
    <div id={`venue${id}`} className="venue-carousel-item" style={{backgroundImage: 'url(' + image + ')'}}>
      <div className="venue-carousel-item-content full-height">
        <div className="venue-overview phs pts">
          <div className="flex-row">
            <div className="flex t3 text-uc em-high">{ venue_name }</div>

            <div className='mls t2 em-high'>
              <span className='venue-price-currency'>€</span>
              <span className='t2'>{ lowest_price }</span>
              <span className='venue-price-plus'>+</span>
            </div>
          </div>
        </div>

        <div className="venue-detail">
          <div className='venue-attribute'>
            <i className="icon-map"/>
            <div className='venue-attribute-text'>
              { street },
              <br/>
              { zip } { city }
            </div>
          </div>

          <div className='venue-attribute'>
            <i className="icon-phone"/>
            <a className='venue-attribute-text' href=''>{ phone_number }</a>
          </div>

          <div className='venue-attribute'>
            <i className="icon-site"/>
            <a className='venue-attribute-text' href={ website }>{ website }</a>
          </div>

          <div className="venue-button">
            <a href={`/venues/${id}`}>
              <i className="icon-hex-outline"/>
              <i className="icon-hex"/>
              <i className="icon-short-arrow-right"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

VenueCarouselItem.propTypes = {
  venue: PropTypes.object.isRequired
}

export default VenueCarouselItem

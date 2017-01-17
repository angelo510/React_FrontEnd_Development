import React from 'react'
import VenueWindowContent from './VenueWindowContent'
import VenueThumbGallery from './VenueThumbGallery'
import CarouselModal from './CarouselModal'

const VenueViewTop = ({venue, show, imageIndex, changeImage}) => (
  <div className='venue-header' style={{'backgroundImage': 'url(' + venue.image + ')'}}>

    <div className='flex-row flex-col-mobile'>
      <div className='venue-section venue-header__image-section flex flex-row flex-vb phm'>
        <div className="flex">
          <div className="text-center em-high t1-mobile t2 text-uc">{ venue.venue_name }</div>

          <div className='flex-row flex-hc mts mbm pull-right-desktop mrm-desktop'>
            <div className='venue-price-bubble mrt'>
              <span className='venue-currency'>€</span>
              <span className='venue-price'>{ venue.lowprice }</span>
            </div>
            <div className='venue-price-divider'>
              <i className="icon-short-arrow-right" />
            </div>
            <div className='venue-price-bubble mlt'>
              <span className='venue-currency'>€</span>
              <span className='venue-price'>{ venue.highprice }</span>
            </div>
          </div>
        </div>
      </div>

      <div className='venue-section venue-header__information-section'>
        <div>
          <h3 className='venue-section-title'>Info</h3>
          <VenueWindowContent venue={venue}/>
          <div className='page-venue__header-slides'>
            <VenueThumbGallery venue={venue} show={show} changeImage={changeImage}/>
          </div>
        </div>
      </div>
      <CarouselModal venue={venue} imageIndex={imageIndex} changeImage={changeImage}/>
    </div>
  </div>
);

export default VenueViewTop

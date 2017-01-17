import React from 'react'

export const VenueThumbGallery = ({venue, show, changeImage}) => (
  <div className='venue-thumbnails'>
    {venue.thumbnails.map((thumb, index) =>
      <div className='venue-thumbnails__thumbnail-container' key={index}>
        <div className='venue-thumbnails__thumbnail'
             onClick={() => {
               changeImage(index);
               show('carouselModal');
             }}>
          <img src={thumb.image_url}
               className='full-width full-height'
               style={{objectFit: 'cover'}}/>
        </div>
      </div>
    )}
  </div>
)

export default VenueThumbGallery

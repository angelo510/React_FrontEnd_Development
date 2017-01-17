import React, {Component, PropTypes} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import OwlCarousel from 'react-owl-carousel'
import 'react-owl-carousel/src/owl.carousel.css'
// import './CarouselModal.scss'

const CarouselModal = ({venue, show, handleHide, imageIndex, changeImage}) => (
  <Modal dialogClassName='carousel-modal' show={show} onHide={handleHide}>
    <Modal.Header>
      <button type="button" className="carousel-modal__close-button " aria-label="Close" onClick={handleHide}>
        Close
      </button>
    </Modal.Header>
    <Modal.Body>
      <div>
        <OwlCarousel singleItem navigationText={[]} navigation>
          {
            venue.images.map((img, i) => (
              <div key={i}
                   className='carousel-modal__owl-tile'
                   style={{backgroundImage: 'url(' + img.image_url + ')'}}>
                <img src={img.image_url} alt=''/>
              </div>
            ))
          }
        </OwlCarousel>
      </div>
      <div className='flex-row'>
        <div className='pvs phm text-uc color-dark-grey t3 em-high flex'>
          { venue.venue_name }
        </div>
      </div>
    </Modal.Body>
  </Modal>
)


export default connectModal({
  name: 'carouselModal'
})(CarouselModal)

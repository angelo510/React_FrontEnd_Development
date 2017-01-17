import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'

export const SearchResultItem = ({result, show, chooseSlot, onSlotSelect}) => (
  <div className='pas'>
    <div className='venue-search-result-item' style={{backgroundImage: 'url(' + result.image + ')'}}>
      <div className='venue-search-result-item-content'>
        <div className='venue-detail full-height'>
          <div className='t3 em-high text-uc'>Info</div>

          <div className='venue-attribute'>
            <i className='icon-map'/>
            <div className='venue-attribute-text'>
              { result.street },
              <br/>
              { result.zip } { result.city }
            </div>
          </div>

          <div className='venue-attribute'>
            <i className='icon-phone'/>
            <a className='venue-attribute-text' href=''>{ result.phone_number }</a>
          </div>

          <div className='venue-attribute'>
            <i className='icon-site'/>
            <a className='venue-attribute-text' href={ result.website }>{ result.website }</a>
          </div>

          <div className='venue-button'>
            <a href={ result.url }>
              <i className='icon-hex-outline'/>
              <i className='icon-hex'/>
              <i className='icon-short-arrow-right'/>
            </a>
          </div>
        </div>
      </div>

      <div className='venue-overview'>
        <div className='flex-row'>
          <div className='venue-name'>{ result.venue_name }</div>

          <div className='venue-price flex-row flex-vc flex-hc'>
            <div className='venue-price-currency'>€</div>
            <div className='t2 em-high'>{ result.data.min_price }</div>
            <div className='venue-price-plus'>+</div>
          </div>
        </div>
      </div>
    </div>

    <div className='flex-row'>
      {result.data.marginalized_available_times.map((slot, i) => (
        <button className='venue-timeslot'
                onClick={() => {
                  chooseSlot(result.venue_name);
                  onSlotSelect(slot);
                  show('booking')
                }} key={i}>
          {moment().startOf('day').minutes(slot).format('HH:mm')}
        </button>
      ))}
    </div>
  </div>
)

export default SearchResultItem

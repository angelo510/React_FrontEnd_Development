import React from 'react';
import moment from 'moment';
import Text from '../../../containers/Text'

const daysOfWeek = [
  {
    code: 'mon',
    abbreviation: 'Mon',
  },
  {
    code: 'tue',
    abbreviation: 'Tues',
  },
  {
    code: 'wed',
    abbreviation: 'Wed',
  },
  {
    code: 'thu',
    abbreviation: 'Thurs',
  },
  {
    code: 'fri',
    abbreviation: 'Fri',
  },
  {
    code: 'sat',
    abbreviation: 'Sat',
  },
  {
    code: 'sun',
    abbreviation: 'Sun',
  },
];

const VenueViewBottom = ({venue}) => (
  <div className='venue-view-bottom flex-row flex-hc pam'>
    <div className='max-width flex-row flex-col-mobile mts-mobile mbm'>

      <div className='prl'>
        <h3 className='venue-section-title'>
          <Text text="pages.venues.opening_hours" />
        </h3>
        <div className='flex-row' style={{fontSize: '1.16rem'}}>
          <div className="mrs">
            { daysOfWeek.map((result, index) => <div key={index}>{result.abbreviation}</div>) }
          </div>
          <div>
            {
              daysOfWeek.map((result, index) =>
                <div key={index}>
                  { moment().startOf('day').seconds(venue.business_hours[result.code]['opening']).format('HH:mm') } -&nbsp;
                  { moment().startOf('day').seconds(venue.business_hours[result.code]['closing']).format('HH:mm') }
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className='flex mbl-mobile mtm-mobile'>
        <h3 className='venue-section-title'>
          <Text text="pages.venues.map" />
        </h3>
        <div className='venue-view-bottom__map-container'>
          <div className='venue-view-bottom__map'>
            <iframe width='600'
                    height='450'
                    frameBorder='0'
                    style={{border: 0}}
                    src={`https://www.google.com/maps/embed/v1/place?q=${ venue.latitude },
              ${ venue.longitude }&key=AIzaSyA6ZzAtv2AfMF7QYR8MlBVonlqsKQsruoE`} allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VenueViewBottom;

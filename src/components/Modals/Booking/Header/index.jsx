import React from 'react';
import BookingModalVenueSportList from './BookingModalVenueSportList';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Text from '../../../../containers/Text'

const Header = props => {
  const { sport, changeSport, icons, submitSearch, venue, locale, date, changeDate, sportsListVisible, toggleSportsList } = props;

  return (
    <div className='booking-modal__header'>
      <BookingModalVenueSportList
        selectedSport={sport}
        icons={icons}
        submitSearch={submitSearch}
        venueSports={venue.supported_sports}
        sport={sport}
        sportsListVisible={sportsListVisible}
        toggleSportsList={toggleSportsList}
        changeSport={changeSport} />

      <div className='flex-col flex-row-desktop pll pts'>
        <div className='flex t3 text-uc mbs-mobile'>
          {venue.venue_name}
        </div>

        <div className='pat flex-col flex-row-desktop flex-vc-desktop'>
          <div className='text-right-desktop prs-desktop'>
            <Text text="modals.booking.availability_on" />
          </div>
          <DatePicker
            onChange={changeDate}
            selected={moment(date, 'DD/MM/YYYY')}
            locale={locale}
            className='date-picker-input'
            dateFormat='DD/MM/YYYY'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

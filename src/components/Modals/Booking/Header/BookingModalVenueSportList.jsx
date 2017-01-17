import React from 'react';

const BookingModalVenueSportList = props => {
  const { sport, icons, venueSports, changeSport, submitSearch, sportsListVisible, toggleSportsList } = props;
  const remainingSports = venueSports.filter(matchingSport => matchingSport !== sport);
  let modifiedIcons = {};
  icons.forEach(icon => modifiedIcons[icon.sport] = { active: `https://rc.playven.com/${icon.url.active}`, inactive: `https://rc.playven.com/${icon.url.inactive}`});
  let onClick;
  if (remainingSports.length) {
    onClick = toggleSportsList
  }
  return (
    <div className='booking-modal__sports-list'>
      <div className="booking-modal__sports-list-dropdown">
        <i className='icon-hex booking-modal__sports-list-dropdown-hex'
           onClick={onClick}/>
        <i className={`icon-${sport} booking-modal__sports-list-dropdown-logo`}
           onClick={onClick}
           style={{fontSize: '2.5rem', top: '-3.1rem', left: '-5.8rem', cursor: 'pointer'}} />
        <i className='icon-down-arrow booking-modal__sports-list-dropdown-arrow'
           onClick={onClick}
           style={{left: '-7.3rem'}}/>
        <div className="booking-modal__sports-list-dropdown-menu"
             style={{ display: `${sportsListVisible ? 'block' : 'none'}` }}>
          <div></div>
          {remainingSports.map((sport, index) => (
            <div key={index}
                 onClick={() => {changeSport(sport); toggleSportsList()}}>
              <i className={"icon-" + sport + " color-white"}/>
            </div>
          ))}
          <i className="icon-hex booking-modal__sports-list-dropdown-end"/>
        </div>
      </div>
    </div>
  );
}

export default BookingModalVenueSportList;

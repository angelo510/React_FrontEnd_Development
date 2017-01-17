import React, { PropTypes } from 'react'
import Fields from '../../Home/components/MainVenueSearch/FormFields'
import SmartFields from '../../Home/containers/SearchGrid/SearchFields'

const VenueSearch = ({ onSubmit, locale, venue, sports }) => {
  const filteredSports = sports.filter(sport => venue.supported_sports.includes(sport.sport));
  return (
    <form onSubmit={onSubmit} role="search" >
      <Fields.Sport locale={locale} sports={filteredSports} />
      <SmartFields.Duration />
      <SmartFields.Date />
      <SmartFields.Submit />
    </form>
  );
}


VenueSearch.propTypes = {
  formClass: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default VenueSearch

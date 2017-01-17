import React, { PropTypes } from 'react'
import Fields from '../../containers/SearchGrid/SearchFields'

const SearchForm = ({onSubmit}) =>
  <form role='search'
        onSubmit={ onSubmit }>
    <div className='venue-search-bar'>
      <Fields.Sport />
      <Fields.Duration />
      <Fields.Date />
      <Fields.Time />
      <Fields.Submit />
    </div>
  </form>


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SearchForm

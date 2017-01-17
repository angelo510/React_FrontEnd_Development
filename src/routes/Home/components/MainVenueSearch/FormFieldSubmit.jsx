import React from 'react'
import Text from '../../../../containers/Text'

const SearchFormSubmitButton = () =>
  <div>
    <button className='pl-btn-primary full-width'
            type='submit'>
      <Text text='components.venue_search.submit'/>
    </button>
  </div>

export default SearchFormSubmitButton

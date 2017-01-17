import React from 'react'
import Text from '../../containers/Text'

const Search = () => (
  <div className='search'>
    <form action='/search' acceptCharset='UTF-8' method='get'>
      <input type='hidden' name='utf8' value='√'/>
      <div className='search__search-field'>
        <input type='search'
               placeholder={ Text.t('nav.search_venues') }
               autoComplete='off'
               name='search[q]'
               id='search_q'/>
        <button name='button' type='submit'>
          <i className='icon-search'/>
        </button>
      </div>
    </form>
  </div>
)

export default Search

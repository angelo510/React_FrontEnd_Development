import React, { Component } from 'react'
import Navigation from '../../../containers/Navigation'
// TODO: Needs to be fixed
import MainVenueSearch from '../../Home/containers/SearchGrid/SearchFormContainer'
import SearchResults from '../containers/SearchResultsContainer'
// import './SearchView.scss'

class Search extends Component {
  componentDidMount() {
    const { getSportNames } = this.props;
    getSportNames();
  }
  render() {
    return (
      <div>
        <header>
          <Navigation theme={'light'} />
        </header>

        <div className='mtm mhm mbs'>
          <MainVenueSearch />
        </div>

        <SearchResults />
      </div>
    );
  }
}

export default Search

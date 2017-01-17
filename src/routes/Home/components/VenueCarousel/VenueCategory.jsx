import React, { Component, PropTypes } from 'react'
import Text from '../../../../containers/Text'

/*
  Requires functionality to work
  1. Add overlay on button click
 */

class VenueCategory extends Component {
  componentDidMount() {
    const { getSportNames, activeSport, all_sports, selectActiveSport } = this.props

    getSportNames()
    if (!activeSport && all_sports && all_sports[0]) {
      selectActiveSport(all_sports[0])
    }
  }

  handleClick = (sport, index) => {
    this.props.selectActiveSport(sport);
    this.props.toggleSportSelectionMenu()
    this.props.getVenues(sport.sport)
  }

  render() {
    const { all_sports,
            activeSport,
            selectActiveSport,
            selectingNewSport,
            toggleSportSelectionMenu
    } = this.props

    const display = selectingNewSport ? 'block' : 'none';
    const allSports = all_sports.filter(v => v.sport !== activeSport.sport)

    return (
      <div className="venue-category">
        <div className="venue-category-dropdown">

          <i className="icon-hex venue-category-dropdown-hex" onClick={toggleSportSelectionMenu} />
          <i className={`icon-${activeSport.sport} venue-category-dropdown-logo`} onClick={toggleSportSelectionMenu} />
          <i className="icon-down-arrow venue-category-dropdown-arrow" onClick={toggleSportSelectionMenu} />

          <div className="venue-category-dropdown-menu" style={{ display }}>
            <div />
            {allSports.map((sport, index) =>
              <div key={index} onClick={() => this.handleClick(sport)}>
                <i className={`icon-${sport.sport} color-white`} />
              </div>)}
            <i className="icon-hex venue-category-dropdown-end" />
          </div>
        </div>

        <a className="venue-category-button pl-btn-dark" href="#">
          <Text text="pages.home.sports_list" />
          <i className="icon-long-arrow-right t5 mls" />
        </a>
      </div>
    )
  }
}

VenueCategory.propTypes = {
  all_sports: PropTypes.arrayOf(
    PropTypes.shape
  ).isRequired,
  activeSport: PropTypes.object,
  selectingNewSport: PropTypes.bool.isRequired,
  getSportNames: PropTypes.func.isRequired,
  selectActiveSport: PropTypes.func.isRequired,
  toggleSportSelectionMenu: PropTypes.func.isRequired
}

VenueCategory.defaultProps = {
  activeSport: { sport: 'tennis' }
}

export default VenueCategory

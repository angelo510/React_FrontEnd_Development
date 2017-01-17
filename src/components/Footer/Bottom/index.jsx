import React, { Component, PropTypes } from 'react'

import Text from '../../../containers/Text'
import Flag from './Flag'
import LanguageButton from './LanguageButton'
import fi from '../assets/fin.png'
import us from '../assets/us.png'

class Bottom extends Component {
  componentDidMount() {
    const { setLocale } = this.props;
    const locale = localStorage.getItem('locale');
    locale !== null && setLocale(locale);
  }

  _setLocale(e) {
    const { setLocale, toggleMenu } = this.props
    setLocale(e)
    toggleMenu()
    localStorage.setItem('locale', e)
  }

  render() {
    const { toggleMenu, locale, displayMenu } = this.props;
    return (
      <div className="flex-row color-bdt-lighter-grey pts">

        <div className="flex flex-row t5">
          <Text text="footer.follow"/>
          <a className="footer-social-link" href="https://www.facebook.com/ampersports/">
            <i className="icon-facebook"/>
          </a>
          <a className="footer-social-link" href="https://twitter.com/ampersports">
            <i className="icon-twitter"/>
          </a>
        </div>

        <div className="footer-language-selector dropdown dropup">
          <LanguageButton text={locale == 'fi' ? 'Suomi' : 'English'} image={locale == 'fi' ? fi : us}
                          onClick={toggleMenu}/>
          <div className="footer-language-selector-choices dropdown-menu dropdown-menu-right"
               style={{display: displayMenu ? 'initial' : 'none'}}>
            <Flag text="Suomi" image={fi} locale="fi" onClick={(e) => this._setLocale(e)}/>
            <Flag text="English" image={us} locale="en" onClick={(e) => this._setLocale(e)}/>
          </div>
        </div>
      </div>
    );
  }
}

Bottom.propTypes = {
  setLocale: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Bottom

import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/language-selection-actions'
import { setLocale } from 'react-redux-i18n';
import Bottom from '../../components/Footer/Bottom'

const mapStateToProps = (state) => {
  return {
    displayMenu: state.language_selection.showing,
    locale: state.i18n.locale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocale: (locale) => {
      dispatch(setLocale(locale))
    },
    toggleMenu: (display) => {
      dispatch(toggleMenu(display))
    }
  }
}

const FooterLanguageMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bottom)

export default FooterLanguageMenu

/*
  Bottom requires:
  setLocal: PropTypes.func.isRequired,
  displayMenu: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
*/

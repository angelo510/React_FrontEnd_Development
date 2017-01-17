import { connect } from 'react-redux'
import _Text from '../../components/Text'
import { I18n } from 'react-redux-i18n';

const mapStateToProps = (state) => {
  return {
    locale: state.i18n.locale,
  }
}

const Text = connect(
  mapStateToProps
)(_Text)

export default Text

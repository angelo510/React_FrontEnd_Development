import React, { PropTypes } from 'react'
import { Translate, I18n } from 'react-redux-i18n';

/*
  This updates on locale change
*/
const Text = ({ text }) =>
  <Translate value={text} />


Text.propTypes = {
  text: PropTypes.string.isRequired,
  locale: PropTypes.string
}


Text.t = text => I18n.t(text)

export default Text

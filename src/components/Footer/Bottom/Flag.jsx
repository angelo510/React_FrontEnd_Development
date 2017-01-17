import React, { PropTypes } from 'react'

const Flag = ({text, image, locale, onClick }) => {
  return (
    <button onClick={() => onClick(locale)}>
     <img src={image}/> {text}
    </button>
  );
}

Flag.propTypes = {
  image: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Flag

import React, { PropTypes } from 'react'

const LanguageButton = ({text, image, onClick }) => {
  return (
    <button className="b-footer-lang__link"
                id="js-dropdown-menu-lang"
                data-toggle="dropdown"
                aria-haspopup="true"
                onClick={onClick}
                aria-expanded="false">
          <img src={image} />
          <span>{text}</span>
        </button>
  );
}

LanguageButton.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LanguageButton

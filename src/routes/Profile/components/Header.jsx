import React from 'react';
import logo from '../assets/logo.svg'
import Text from '../../../containers/Text'

const Header = ({ firstName, lastName }) =>
  <div className="max-width flex-row flex-col-mobile flex-vc text-uc pbl pbm-mobile color-bdb-lighter-grey">
    <div className="mrm">
      <i className="icon-logo-paddle color-primary-brand" style={{ fontSize: '7rem' }} />
    </div>
    <div className="mtm-mobile">
      <div className="color-primary-brand t5 em-high full-width-mobile text-center-mobile">
        <Text text="pages.profile.your_profile" />
      </div>
      <div className="color-dark-grey t3 em-high full-width-mobile text-center-mobile">
        {`${firstName} ${lastName}`}
      </div>
    </div>
  </div>


export default Header;

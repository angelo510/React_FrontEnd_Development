import React from 'react';
import Text from '../../../containers/Text'

const Help = () => (
  <div className='navigation-link navigation-link-bordered'>
    <a href='https://amper.zendesk.com/hc/en-us'>
      <i className='icon-help'/>
      <Text text='nav.help' />
    </a>
  </div>
)

export default Help;

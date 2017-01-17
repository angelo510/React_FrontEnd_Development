import React from 'react'
import Text from '../../../containers/Text'

const Top = () => {
  return (
    <div className="flex-row flex-col-mobile mbm">
      <div className="flex flex-row mtm mbs-lt-desktop">
        <div className="flex-mobile mlm-mobile">
          <i className='icon-logo-paddle footer-icon'/>
        </div>

        <div className="footer-links mll mlxl-desktop">
          <div>
            <a href='https://amper.zendesk.com/hc/en-us'>
              <Text text='footer.help'/>
            </a>
          </div>
          <div>
            <a href='/careers'>
              <Text text='footer.careers'/>
            </a>
          </div>
          <div>
            <a href='/termsofuse'>
              <Text text='footer.terms'/>
            </a>
          </div>
          <div>
            <a href='/privacypolicy'>
              <Text text='footer.privacy'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top

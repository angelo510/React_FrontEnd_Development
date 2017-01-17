import React, { Component } from 'react'
import { Link } from 'react-router'
import Buttons from './Buttons'
import Search from './Search'
import ResendConfirmationModal from 'containers/Modals/ResendConfirmationEmail'

import ForgotPassword from 'containers/Modals/ForgotPassword'

const Navigation = ({theme, show, auth}) => (
  <div id='navigation' className={theme}>
    <button id='navigation-toggle'
            type='button'
            className='hide-gt-mobile t3 pas color-dark-grey'>
      ☰
    </button>
    <div className='hide-mobile'>
      <div id='navigation-menu'>
        <div className='flex-row flex-hc mlt-gt-mobile mtm-mobile'>
          <Link className='navigation-logo' to='/'/>
        </div>
        <div className='flex navigation-link navigation-link-bordered'>
          <i className='icon-map color-primary-brand mlt'/>
          <a><span>Helsinki</span></a>
        </div>
        { !auth && <Buttons.Register /> }
        { !auth && <Buttons.Login /> }
        { auth && <Buttons.Profile /> }
        { auth && <Buttons.Logout /> }
        { !auth && <ForgotPassword /> }
        <Buttons.Help />
      </div>
    </div>
    { !auth && <ResendConfirmationModal /> }
  </div>
)

export default Navigation

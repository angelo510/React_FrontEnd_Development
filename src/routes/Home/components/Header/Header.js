import React from 'react'
import { IndexLink, Link } from 'react-router'
import Text from '../../../../containers/Text'
// import './Header.scss'
//
// export const Header = () => (
//   <div>
//     <h1>React Redux Starter Kit</h1>
//     <IndexLink to='/' activeClassName='route--active'>
//       Home
//     </IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName='route--active'>
//       Counter
//     </Link>
//   </div>
// )

/*
 This file should be under routes/home
 */

const Header = () =>
  <div className="home-title max-width color-white pam paxl-desktop text-uc text-center">
    <h1><Text text="pages.home.main_title" /></h1>
    <div className="lead"><Text text="pages.home.main_subtitle" /></div>
  </div>


export default Header

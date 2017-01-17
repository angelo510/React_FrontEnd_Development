import React from 'react';
import Text from '../../../containers/Text'
import SecondaryProfileNavigation from '../containers/SecondaryProfileNavigationContainer'


const linkTranslations = [
  'pages.profile.navigation.edit_profile',
  'pages.profile.navigation.my_reservations',
  'pages.profile.navigation.my_recurring_reservations'
]
const links = ['edit', 'reservations', 'memberships']

const ProfileNavigation = ({ active, onClick, future, filter }) =>
  <div className="profile-navigation">
    <div className="profile-navigation_row mtt-mobile mvm-gt-mobile">
      { links.map((v, i) =>
        <div className={`profile-navigation_link ${active === links[i] ? 'color-primary-brand' : null}`}
          key={i}
          onClick={() => onClick(links[i])}>
           <Text text={linkTranslations[i]} /> 
        </div>)}
    </div>
    <SecondaryProfileNavigation />
  </div>


export default ProfileNavigation

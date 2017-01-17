import React from 'react';
import Text from '../../../containers/Text'

const links = [
  'pages.profile.navigation.navigation_profile',
  'pages.profile.navigation.my_reservations',
  'pages.profile.navigation.my_recurring_reservations']

const reservationOptions = ['future_reservations', 'past_reservations']
const membershipOptions = [
  'future_memberships',
  'past_memberships',
  'reselling_memberships',
  'resold_memberships']

const reservationOptionTranslations = [
  'pages.profile.navigation.future_reservations',
  'pages.profile.navigation.past_reservations']

const membershipOptionTranslations = [
  'pages.profile.navigation.future_memberships',
  'pages.profile.navigation.past_memberships',
  'pages.profile.navigation.reselling_reservations',
  'pages.profile.navigation.resold_reservations']

const SecondaryProfileNavigation = ({ active, onClick, filter }) => {
  switch (active) {
    case 'edit':
      return <div />
    case 'reservations':
      return (
        <div className="profile-navigation_row mtm-gt-mobile">
          { reservationOptions.map((v, i) =>
            <div
              className={`profile-navigation_link ${filter === reservationOptions[i] ? 'color-primary-brand' : null}`}
              key={i}
              onClick={() => onClick(reservationOptions[i])}
              role="button">
              <Text text={reservationOptionTranslations[i]} />
            </div>
          )}
        </div>
      )
    case 'memberships':
      return (
        <div className="profile-navigation_row mtm-gt-mobile">
          { membershipOptions.map((v, i) =>
            <div className={`profile-navigation_link ${filter === membershipOptions[i] ? 'color-primary-brand' : null}`}
              key={i}
              onClick={() => onClick(membershipOptions[i])}
              role="button" >
              <Text text={membershipOptionTranslations[i]} />
            </div>
          )}
        </div>
      )
    default:
      return <div />
  }
}

export default SecondaryProfileNavigation

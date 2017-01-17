import {connect} from 'react-redux'
import SecondaryProfileNavigation from '../components/SecondaryProfileNavigation'
import {onClickNavigationOption} from '../modules/profile'

const mapStateToProps = state => ({
  active: state.profile.active,
  filter: state.profile.filter
})

const mapDispatchToProps = {
  onClick: item => onClickNavigationOption(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryProfileNavigation)



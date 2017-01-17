import {connect} from 'react-redux'
import ProfileNavigation from '../components/ProfileNavigation'
import {onClickNavigationItem} from '../modules/profile'

const mapStateToProps = state => ({
  active: state.profile.active,
  filter: state.profile.filter
})

const mapDispatchToProps = {
  onClick: item => onClickNavigationItem(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavigation)



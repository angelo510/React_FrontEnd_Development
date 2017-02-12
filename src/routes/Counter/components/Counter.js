import React from 'react'
import Navigation from '../../../components/Navigation'

export const Counter = (props) => (
  
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter

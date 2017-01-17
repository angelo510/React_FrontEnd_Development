import React from 'react'
import Footer from '../../components/Footer'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='flex-col flex'>
    <div className='flex'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

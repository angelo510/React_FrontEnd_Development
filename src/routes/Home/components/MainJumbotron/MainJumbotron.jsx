import React from 'react'
import Text from '../../../../containers/Text'
/*
 TODO: Only display joinbtn when not logged in
 */

const MainJumbotron = () => (
  <div className='main-jumbotron flex-row flex-col-tablet flex-col-mobile color-bg-primary-brand color-white'>
    <div className='main-jumbotron__text-container flex flex-row flex-he mam'>
      <div className='main-jumbotron__text mtm mrl-desktop'>
        <h2 className='mtm-desktop text-uc'>
          <Text text='pages.home.join_header'/>
        </h2>

        <div className='main-jumbotron__divider'/>

        <div className='mbm'>
          <Text text='pages.home.join_content'/>
        </div>

        <div className='mbm'>
          <button className='pl-btn-dark full-width-lt-desktop' href='#' data-toggle='modal' data-target='#signup-modal'
                  role='button'>
            <Text text='pages.home.join_button'/>
          </button>
        </div>
      </div>
    </div>

    <div className='main-jumbotron__image-container'>
    </div>
  </div>
)

export default MainJumbotron

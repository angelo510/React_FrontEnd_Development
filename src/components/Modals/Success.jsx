import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import Text from '../../containers/Text'

const Success = ({show, handleHide, user}) => (
  <Modal dialogClassName='success-modal hex-modal hex-modal-light'
         show={ show }
         onHide={ handleHide }
         backdrop={ true }>
    <i className='icon-hex-close modal-close color-light-grey' onClick={ handleHide }/>
    <Modal.Body>
      <div className='flex-col pal pam-mobile'>
        <div className='flex-row flex-hc mbm'>
          <i className='success-modal__image icon-hex-check color-primary-brand'/>
        </div>

        <div className='flex-row flex-hc color-dark-grey t3 em-high mbm'>
          <Text text='modals.success.title'/>
        </div>

        <div className='flex-row flex-hc color-dark-grey mbm'>
          <Text text='modals.success.text'/>
        </div>

        <div className='success-modal__buttons'>
          <button className='success-modal__button-one'
                  onClick={handleHide}>
            <Text text='modals.success.make_another'/>
            <div className='success-modal__buttons-divider'>
              <Text text='support.or'/>
            </div>
          </button>

          <a href='/profile' className='success-modal__button-two'>
            <Text text='modals.success.view_booking'/>
          </a>
        </div>
      </div>
    </Modal.Body>
  </Modal>
)


export default connectModal({
  name: 'success'
})(Success)

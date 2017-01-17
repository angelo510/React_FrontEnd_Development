import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Text from '../../containers/Text'

const NotLogged = ({show, onChange, handleHide, openModal}) => {
  const onClick = (type) => {
    handleHide();
    openModal(type, {onSuccess: 'payment'});
  }

  return (
    <Modal dialogClassName='unauthenticated-modal hex-modal hex-modal-light'
           show={ show }
           onHide={ handleHide }
           backdrop={ true }>
      <i className='icon-hex-close modal-close color-light-grey' onClick={ handleHide }/>
      <Modal.Body>
        <div className='flex-col pal pam-mobile'>
          <div className='flex-row flex-hc mbm'>
            <i className='unauthenticated-modal__image icon-hex-close color-red'/>
          </div>

          <div className='flex-row flex-hc color-red t3 em-high mbm'>
            <Text text="modals.not_logged.title"/>
          </div>

          <div className='flex-row flex-hc color-dark-grey mbm'>
            <Text text='modals.not_logged.modal_text'/>
          </div>

          <div className='unauthenticated-modal__buttons'>
            <button className='unauthenticated-modal__button-one'
                    onClick={() => onClick('register')}>
              <Text text='modals.not_logged.signup'/>
              <div className='unauthenticated-modal__buttons-divider'>
                <Text text='modals.not_logged.support.or'/>
              </div>
            </button>

            <button className='unauthenticated-modal__button-two'
                    onClick={() => onClick('login')}>
              <Text text='modals.not_logged.login'/>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default connectModal({
  name: 'notlogged'
})(NotLogged)

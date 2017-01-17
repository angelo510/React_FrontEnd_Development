import React from 'react'
import Fa from 'react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Text from '../../../containers/Text'
import RemoteForm from './RemoteForm'
import CardDialog from './CardDialog'
import moment from 'moment'

export const Payment = props => {
  const { show, handleHide, selectedCourts, user, loaded, onCardAdd, pay, bookWithoutPayment,
  duration, date, cards, getCards, addCard, selectCard, selectedCard, clearState, location } = props;
  const skippable = selectedCourts.every(court => court.payment_skippable);
  let totalPrice = 0;
  selectedCourts.forEach(court => totalPrice += court.price);
  const onHide = () => {
    handleHide();
    clearState();
  }
  const faStyle = location === '/search'
    ? {color: '#0e7dff', marginTop: '350px'}
    : {color: '#0e7dff', marginTop: '130px'}
  return (
    <Modal dialogClassName='payment-modal hex-modal hex-modal-light'
           show={ show }
           onHide={ onHide }
           backdrop={ true }>
      <i className='icon-hex-close modal-close color-light-grey' onClick={ onHide }/>
      <Modal.Body>
        <div className='flex-col pal pam-mobile'>

          <div className='flex-row flex-hc mbm'>
            <i className='payment-modal__image icon-hex-payment color-primary-brand'/>
          </div>

          <div className='flex-row flex-hc color-dark-grey t3 em-high mbm'>
            <Text text='modals.payment.title'/>
          </div>

          <div className='flex-row flex-hc color-dark-grey mbm'>
            <Text text='modals.payment.book_text'/>
            <span className='inline-span'>{`${selectedCourts.length}`}</span>
            <Text text='modals.payment.court_count'/>
            <span className='inline-span'>{`${totalPrice} \u20AC`}</span>
          </div>

          {loaded &&
          <div className='payment-modal__spinner'>
            <Fa className='color-primary-brand'
                name='refresh'
                spin={true}
                stack='2x'/>
          </div>
          }

          <RemoteForm action='' type='post'>
            <CardDialog
              addCard={addCard}
              cards={cards}
              getCards={getCards}
              loaded={loaded}
              onCardAdd={onCardAdd}
              selectCard={selectCard}
              selectedCard={selectedCard}
              user={user} />
            {!loaded &&
            <div className='flex-row flex-hc mbs'>
              <button className='pl-btn-primary'
                      onClick={() => pay(duration, date)}
                      disabled={loaded || !cards.length}>
                <Text text="modals.payment.pay_button" />
              </button>
            </div>
            }
          </RemoteForm>

          {!loaded && skippable && (
            <div className='flex-row flex-hc'>
              <a href='#'
                 className='blue-link t5'
                 onClick={() => bookWithoutPayment(duration, date)}>
                 <Text text="modals.payment.skip_payment" />
              </a>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default connectModal({
  name: 'payment'
})(Payment)

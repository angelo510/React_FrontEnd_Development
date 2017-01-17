import React, { Component } from 'react'
import Select from 'react-select';
import Text from '../../../containers/Text'
import { PUBLISHABLE_KEY as stripe_pk } from '../../../env'
import 'react-select/dist/react-select.css';

export default class CardDialog extends Component {
  componentDidMount() {
    this.initStripe();
    this.props.getCards();
  }

  initStripe() {
    const { user, addCard } = this.props;
    this.stripe = StripeCheckout.configure({
      key: stripe_pk,
      locale: 'auto',
      name: 'Amper',
      token: addCard,
      panelLabel: 'Add Card',
      email: user.email,
      allowRememberMe: false,
      description: 'Add new card'
    });
  }

  openStripe(e) {
    e.preventDefault();
    this.stripe.open();
  }

  render() {
    const { loaded, selectCard, selectedCard, cards, isProfile = false } = this.props;

    const options = cards.map(card => ({value: card.id, label: `${card.brand} ${Text.t('general.ending').toLowerCase()} ${card.last4}`}));
    return (
      <div>
        {!loaded &&
        <div className='flex-row flex-col-mobile mbm'>
          <div className='flex phs' style={{paddingLeft: `${isProfile ? 0 : '1rem'}`}}>
            <Select autofocus
                    className='select-text'
                    clearable={false}
                    disabled={loaded || !cards.length}
                    onChange={(e) => selectCard(e.value)}
                    optionClassName='select-text__option'
                    options={options}
                    searchable={false}
                    style={{
                      maxHeight: '200px',
                      overflowY: 'auto',
                      padding: 0,
                      border: 0,
                      textAlign: 'left',
                      background: 'transparent'
                    }}
                    value={selectedCard}/>
          </div>
          <button className='change-card flex pl-btn-light-grey'
                  onClick={e => this.openStripe(e)}>
            <Text text="modals.payment.add_new" />
          </button>
        </div>
        }
      </div>
    );
  }
}

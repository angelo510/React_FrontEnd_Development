import React from 'react'

const PriceBubble = ({theme, currency, amount}) => {
  return (
    <div className={'price-bubble price-bubble-' + theme}>
      <div className='price-bubble__currency'>
        {currency}
      </div>
      <div className='price-bubble__amount'>
        {amount}
      </div>
    </div>
  )
}

PriceBubble.defaultProps = {theme: 'default'};

export default PriceBubble

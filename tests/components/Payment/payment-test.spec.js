import React from 'react'
import { Payment } from '../../../src/components/Modals/Payment/';
import { shallow } from 'enzyme'

describe('test Payment', () => {
  const props = {
    date: '30/12/2016',
    selectedCourts: [],
    loaded: false,
    cards: [],
    location: '/venue'
  }

  const wrapper = shallow(<Payment {...props} />);

  describe('spinner', () => {
    it('doesn\'t render spinner when loaded false', () => {
      expect(wrapper.find('.payment-modal__spinner').length).to.equal(0)
    });

    it('render spinner when loaded true', () => {
      const props2 = Object.assign({}, props, { loaded: true });
      const wrapper2 = shallow(<Payment {...props2} />);
      expect(wrapper2.find('.payment-modal__spinner').length).to.equal(1)
    });
  });
})

import React from 'react'
import Content from 'routes/Profile/components/Content'
import EditInformation from 'routes/Profile/containers/EditInformationContainer'
import { shallow } from 'enzyme'

describe('test Profile content', () => {
  const props = {
    active: 'edit',
    filter: 'future_reservations',
    content: {
      future_reservations: [],
      past_reservations: [
        {id: 3118, booking_type: 'online' },
        {id: 3110, booking_type: 'online' },
        {id: 3113, booking_type: 'online' }
      ],
      future_memberships: [],
      past_memberships: [],
      reselling_memberships: [],
      resold_memberships: []
    },
    showAlert: false,
    reservationToCancel: {},
    userId: 890,
    locale: 'fi',
    getData: sinon.spy(),
    perPage: 1,
    pageNumber: 1
  }

  const wrapper = shallow(<Content {...props} />);

  it('render edit profile when active: edit', () => {
    expect(wrapper.find(EditInformation).length).to.equal(1);
  })

  it('doesn\'t render edit profile when active not edit', () => {
    const props2 = Object.assign({}, props, { active: 'reservations' });
    const wrapper2 = shallow(<Content {...props2} />);

    expect(wrapper2.find(EditInformation).length).to.equal(0);
  })
})

import React from 'react'
import {shallow} from 'enzyme'
import {OfferCardComponent} from '../index'

describe('<OfferCardComponent />', () => {
	it('renders <OfferCardComponent />', () => {
		const wrapper = shallow(<OfferCardComponent />)
		expect(wrapper).toMatchSnapshot()
	})
})

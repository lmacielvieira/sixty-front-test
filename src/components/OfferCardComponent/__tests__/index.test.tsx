import React from 'react'
import {shallow} from 'enzyme'
import {OfferCardComponent} from '../index'
import {ROUTES} from '../../../settings'

describe('<OfferCardComponent />', () => {
	it('renders <OfferCardComponent />', () => {
		const wrapper = shallow(<OfferCardComponent />)
		expect(wrapper).toMatchSnapshot()
	})

	it('renders <OfferCardComponent /> with fallback image', () => {
		const wrapper = shallow(<OfferCardComponent />)
		wrapper.find({'data-testid': 'offer-img'}).props().onError()
		wrapper.update()
		expect(wrapper.find({'data-testid': 'offer-img'}).props().src).toBe(
			'logo.png'
		)
	})

	it('renders <OfferCardComponent /> with normal image', () => {
		const wrapper = shallow(
			<OfferCardComponent item={{images: {large: 'test.png'}}} />
		)
		expect(wrapper.find({'data-testid': 'offer-img'}).props().src).toBe(
			`${ROUTES.imgUrl}test.png`
		)
	})
})

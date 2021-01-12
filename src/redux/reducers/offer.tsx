import update from 'immutability-helper'
import {SET_OFFERS} from '../mapping'

const INITIAL_STATE = {
	offers: []
}

export default function offerReducer(
	state = INITIAL_STATE,
	action: {type: any; offers: any}
) {
	switch (action.type) {
		case SET_OFFERS:
			return update(state, {
				offers: {
					$set: action.offers
				}
			})
		default:
			return state
	}
}

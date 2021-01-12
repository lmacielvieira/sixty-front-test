import {SET_OFFERS} from '../mapping'

export function setOffers(offers: any) {
	return {
		type: SET_OFFERS,
		offers
	}
}

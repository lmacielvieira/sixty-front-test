import {request} from './requestServices'
import {ROUTES} from '../settings'

export function getOffers() {
	const routeInfo = ROUTES.offers.list
	const url = ROUTES.routeUrl + routeInfo.url

	return request(url, routeInfo.type, null, null)
}

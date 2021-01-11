import {Method} from 'axios'

const prodUrl =
	'https://cors-anywhere.herokuapp.com/http://cdn.sixt.io/codingtask/'
const routeApi = 'api/v1'

interface RouteConfig {
	[key: string]:
		| {
				[key: string]: {
					url: any
					type: Method
				}
		  }
		| string
		| any
}

export const ROUTES: RouteConfig = {
	routeUrl: prodUrl,
	routeApi,
	offers: {
		list: {
			url: `offers.json`,
			type: 'get'
		}
	}
}

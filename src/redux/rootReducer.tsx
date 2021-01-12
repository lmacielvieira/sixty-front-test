import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'
import offerReducer from './reducers/offer'

export const rootReducer = (history: History<any>) =>
	combineReducers({
		router: connectRouter(history),
		offerReducer
	})

import React from 'react'
import './style.less'
import {getOffers} from '../../services'

export default class LandingPage extends React.Component {
	_pageName = 'landing-page'

	// -------------------------------------------------------------------------//
	// React lifecycle functions
	// -------------------------------------------------------------------------//

	constructor(props: {} | Readonly<{}>) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		this.requestItem()
	}

	// -------------------------------------------------------------------------//
	// Requests
	// -------------------------------------------------------------------------//
	requestItem = async () => {
		try {
			const response = await getOffers()
			console.log('res', response)
		} catch (e) {
			console.log('e', e)
		}
	}
	// -------------------------------------------------------------------------//
	// Event Handlers
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Other functions
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Rendering
	// -------------------------------------------------------------------------//

	render() {
		return <div className={`${this._pageName}`}>Landing</div>
	}
}

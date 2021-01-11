import React from 'react'
import {Col, Spin} from 'antd'
import t from 'typy'
import {connect} from 'react-redux'
import {History} from 'history'
import './style.less'
import {getOffers} from '../../services'
import {OfferCardComponent} from '../../components/OfferCardComponent'

interface IProps {
	state: any
	dispatch: any
	history: History
}

interface IState {
	offers: any
	loading: boolean
}

class LandingPage extends React.Component<IProps, IState> {
	_pageName = 'landing-page'

	// -------------------------------------------------------------------------//
	// React lifecycle functions
	// -------------------------------------------------------------------------//

	constructor(props: IProps) {
		super(props)

		this.state = {
			offers: [],
			loading: false
		}
	}

	componentDidMount() {
		this.requestItem()
	}

	// -------------------------------------------------------------------------//
	// Requests
	// -------------------------------------------------------------------------//
	requestItem = async () => {
		try {
			this.setState({loading: true})
			const response = await getOffers()
			console.log('res', response)
			this.setState({offers: t(response, 'offers').safeArray, loading: false})
		} catch (e) {
			console.log('e', e)
			this.setState({loading: true})
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

	renderOffers = () => {
		const {offers} = this.state

		return (
			<div className={`${this._pageName}-offer-grid`}>
				{t(offers).safeArray.length === 0 && (
					<Col xs={24} style={{textAlign: 'center'}}>
						No offer available :(
					</Col>
				)}
				{t(offers).safeArray.map((offer) => {
					return (
						<Col xs={24} md={12} xl={8} key={offer.id}>
							<OfferCardComponent item={offer} />
						</Col>
					)
				})}
			</div>
		)
	}

	render() {
		const {loading} = this.state
		return (
			<div className={`${this._pageName}`}>
				{loading && <Spin size={'large'} style={{paddingTop: 60}} />}
				{!loading && this.renderOffers()}
			</div>
		)
	}
}

const mapStateToProps = (state: any) => ({
	state
})

function mapDispatchToProps(dispatch: any) {
	return {dispatch}
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)

import React, {useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import t from 'typy'
import './style.less'
import {IMAGES, ROUTES} from '../../settings'

export function OfferCardComponent({
	_componentName,
	item,
	imgPrefix
}: InferProps<typeof OfferCardComponent.propTypes>) {
	// -------------------------------------------------------------------------//
	// Hooks
	// -------------------------------------------------------------------------//
	const [fallbackImage, setFallbackImage] = useState<string | null>(null)

	// -------------------------------------------------------------------------//
	// Effects
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Requests
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Event Handlers
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Other functions
	// -------------------------------------------------------------------------//

	// -------------------------------------------------------------------------//
	// Rendering
	// -------------------------------------------------------------------------//

	const renderImage = () => {
		return (
			<img
				data-testid="offer-img"
				className={`${_componentName}-img`}
				alt=""
				onError={() => {
					setFallbackImage(IMAGES.logo)
				}}
				src={
					fallbackImage || `${imgPrefix}${t(item, 'images.large').safeString}`
				}
			/>
		)
	}

	const renderContent = () => {
		return (
			<div className={`${_componentName}-content`}>
				<span className={`${_componentName}-label`}>
					{t(item, 'description').safeString}{' '}
				</span>
			</div>
		)
	}
	const renderFooter = () => {
		return (
			<div className={`${_componentName}-footer`}>
				<span className={`${_componentName}-price`}>
					{t(item, 'prices.basePrice.amount.currency').safeString}{' '}
					{t(item, 'prices.basePrice.amount.display').safeString}
				</span>
			</div>
		)
	}
	return (
		<div className={`${_componentName}`}>
			{renderImage()}
			{renderContent()}
			{renderFooter()}
		</div>
	)
}

// Component props and default prop values
OfferCardComponent.propTypes = {
	_componentName: PropTypes.string,
	imgPrefix: PropTypes.string,
	item: PropTypes.shape({
		id: PropTypes.string,
		description: PropTypes.string,
		images: PropTypes.shape({
			large: PropTypes.string
		}),
		prices: PropTypes.shape({
			basePrice: PropTypes.shape({
				amount: PropTypes.shape({
					display: PropTypes.string
				})
			})
		})
	})
}

OfferCardComponent.defaultProps = {
	_componentName: 'offer-card-component',
	item: {},
	imgPrefix: ROUTES.imgUrl
}

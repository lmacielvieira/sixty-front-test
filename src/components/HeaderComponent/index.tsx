import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {Link} from 'react-router-dom'
import {IMAGES, KEYS} from '../../settings'
import './style.less'

export function HeaderComponent({
	_componentName,
	icon,
	homeUrl
}: InferProps<typeof HeaderComponent.propTypes>) {
	// -------------------------------------------------------------------------//
	// Hooks
	// -------------------------------------------------------------------------//

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

	return (
		<div className={`${_componentName}`}>
			<Link className={`${_componentName}-holder`} to={`${homeUrl}`}>
				<img className={`${_componentName}-icon`} src={`${icon}`} alt="" />
			</Link>
		</div>
	)
}

// Component props and default prop values
HeaderComponent.propTypes = {
	_componentName: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	homeUrl: PropTypes.string,
	name: PropTypes.string,
	orderUrl: PropTypes.string,
	orderLabel: PropTypes.string,
	logoutLabel: PropTypes.string,
	isLogged: PropTypes.bool,
	mail: PropTypes.string
}

HeaderComponent.defaultProps = {
	_componentName: 'header-component',
	icon: IMAGES.logo,
	mail: '',
	name: '',
	homeUrl: '/',
	orderUrl: KEYS.pageKeys.index,
	orderLabel: 'Embrace',
	logoutLabel: 'Lougout',
	isLogged: false
}

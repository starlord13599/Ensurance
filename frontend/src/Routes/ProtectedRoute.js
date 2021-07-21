import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import FlashState from '../services/FlashState';

function ProtectedRoute({ Component, isAuthenticated, ...options }) {
	return (
		<Route
			{...options}
			render={(props) => {
				if (!isAuthenticated) {
					FlashState.setFlash('You need to login to access this page');
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
				return <Component {...props} />;
			}}
		/>
	);
}

export default ProtectedRoute;

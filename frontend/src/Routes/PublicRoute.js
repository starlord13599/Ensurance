import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ isAuthenticated, Component, ...options }) {
	if (isAuthenticated) {
		return <Redirect to="/dashboard"></Redirect>;
	}

	return <Route {...options} component={Component} />;
}

export default PublicRoute;

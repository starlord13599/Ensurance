import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, Component, ...options }) {
	if (!isAuthenticated) {
		return <Redirect to="/login"></Redirect>;
	}

	return <Route {...options} component={Component} />;
}

export default ProtectedRoute;

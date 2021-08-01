import React, { createContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import LocalStorage from '../services/LocalStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const user = LocalStorage.getItem('user');
	let initial = false;

	if (user) {
		initial = true;
	}

	const [isAuthenticated, setIsAuthenticated] = useState(initial);

	const login = () => {
		return setIsAuthenticated(true);
	};

	const logout = () => {
		LocalStorage.deleteAllItems();
		return setIsAuthenticated(false);
	};

	const checkAuthentication = () => {
		if (!isAuthenticated) {
			return <Redirect to="/" state={'You need to login to access this page'} />;
		}
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuthentication }}>
			{children}
		</AuthContext.Provider>
	);
}

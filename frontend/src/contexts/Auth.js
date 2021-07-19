import React, { useEffect, createContext, useState } from 'react';
import LocalStorage from '../helpers/LocalStorage';

export const Auth = createContext(false);

export function AuthProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = () => {
		setIsAuthenticated(true);
	};

	const logout = () => {
		setIsAuthenticated(false);
		LocalStorage.deleteAllItems();
	};

	useEffect(() => {
		const value = LocalStorage.getItem('token');

		if (value) {
			return login();
		}

		return logout();
	}, []);

	return <Auth.Provider value={{ isAuthenticated, login, logout }}>{children}</Auth.Provider>;
}

import React, { useContext } from 'react';

//material ui stuffs
import { ThemeProvider } from '@material-ui/core/styles';
//from apps
import theme from '../theme/app.theme';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import PublicRoute from '../Routes/PublicRoute';
import ProtectedRoute from '../Routes/ProtectedRoute';
import { Redirect, Switch } from 'react-router-dom';
import AddUser from './AddUser/AddUser';
import { AuthContext } from '../contexts/AuthContext';

function App() {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Redirect exact from="/" to="/login" />
				<PublicRoute
					exact
					path="/login"
					Component={Login}
					isAuthenticated={isAuthenticated}
				/>
				<ProtectedRoute
					exact
					path="/add-user"
					Component={AddUser}
					isAuthenticated={isAuthenticated}
				/>
				<ProtectedRoute
					exact
					path="/dashboard"
					Component={Dashboard}
					isAuthenticated={isAuthenticated}
				/>
			</Switch>
		</ThemeProvider>
	);
}

export default App;

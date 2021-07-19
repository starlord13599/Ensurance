import { useContext } from 'react';

//material ui stuffs
import { ThemeProvider } from '@material-ui/core/styles';
//from apps
import theme from '../theme/app.theme';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import PublicRoute from '../Routes/PublicRoute';
import ProtectedRoute from '../Routes/ProtectedRoute';
import { Switch } from 'react-router-dom';
import { Auth } from '../contexts/Auth';

function App() {
	const { isAuthenticated } = useContext(Auth);

	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<PublicRoute
					exact
					path="/login"
					Component={Login}
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

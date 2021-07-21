import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';
import LogInValidate from '../../validations/loginValidations';
import ApiCalls from '../../services/ApiCalls';
import LocalStorage from '../../services/LocalStorage';
import { AuthContext } from '../../contexts/AuthContext';
import FlashAlerts from '../../utils/FlashAlerts';
//icons
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

//components
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FlashState from '../../services/FlashState';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
		padding: '5rem',
		height: '100vh',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '3rem auto',
		justifyContent: 'center',
		padding: '2rem',
		flexGrow: '1',

		[theme.breakpoints.down('xl')]: {
			width: '35%',
		},

		[theme.breakpoints.down('sm')]: {
			width: '50%',
		},

		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
	},
	button: {
		marginTop: '1rem',
	},
	alert: {
		width: '100%',
	},
}));

function Login(props) {
	const classes = useStyles();

	const [isVisible, setVisibility] = useToggle();
	const [values, setValue] = useInput({ email: '', password: '' });
	const [helperText, setHelperText] = useState({ email: null, password: null });
	const [feedback, setFeedback] = useState({ message: null, severity: null });

	const { login } = useContext(AuthContext);

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		//validate input fields here
		let { error, value } = LogInValidate(values);

		if (error) {
			setHelperText({ [value]: error });
			return false;
		}

		//make the api call
		const { data, status } = await ApiCalls.apiPost({
			url: '/api/user/login',
			payload: { email: values.email, password: values.password },
		});

		if (status === 401) {
			setFeedback({ message: data.message, severity: 'error' });
			return false;
		}

		//store token and refreshtoken in localStorage
		LocalStorage.setItem('token', JSON.stringify(data.token));
		LocalStorage.setItem('user', JSON.stringify(data.user));

		setFeedback({ message: null, severity: null });
		return login();
	};

	useEffect(() => {
		let { message, severity } = FlashState.getFlash();
		setFeedback({ message, severity });
	}, []);

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardHeader title={<Typography variant="h4">LOGIN</Typography>} />
				<FlashAlerts feedback={feedback.message} severity={feedback.severity} />

				<form onSubmit={handleOnSubmit} noValidate>
					<FormControl
						margin="normal"
						fullWidth
						variant="outlined"
						error={helperText.email ? true : false}
					>
						<InputLabel>Email</InputLabel>
						<OutlinedInput
							name="email"
							type="email"
							value={values.email}
							labelWidth={40}
							onChange={(e) => setValue('email', e.target.value)}
						></OutlinedInput>
						<FormHelperText>{helperText.email}</FormHelperText>
					</FormControl>

					<FormControl
						margin="normal"
						fullWidth
						variant="outlined"
						error={helperText.password ? true : false}
					>
						<InputLabel>Password</InputLabel>
						<OutlinedInput
							onChange={(e) => setValue('password', e.target.value)}
							name="password"
							value={values.password}
							type={isVisible ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position="end">
									<IconButton edge="end" onClick={setVisibility}>
										{isVisible ? <VisibilityIcon /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
							labelWidth={70}
						/>
						<FormHelperText>{helperText.password}</FormHelperText>
					</FormControl>

					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						type="submit"
						fullWidth
					>
						Login
					</Button>
				</form>
			</Card>
		</div>
	);
}

export default withRouter(Login);

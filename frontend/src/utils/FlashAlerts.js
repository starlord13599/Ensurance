import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
}));

function FlashAlerts({ feedback, severity = 'info' }) {
	const classes = useStyles();

	if (!feedback) {
		return null;
	}

	return (
		<Alert className={classes.root} severity={severity}>
			{feedback}
		</Alert>
	);
}

export default FlashAlerts;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
}));

function FlashAlerts({ feedback, severity = 'info' }) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	if (!feedback) {
		return null;
	}

	return (
		<Collapse in={open} className={classes.root}>
			<Alert
				onClose={() => {
					setOpen(false);
				}}
				severity={severity}
			>
				{feedback}
			</Alert>
		</Collapse>
	);
}

export default FlashAlerts;

import React from 'react';

import { Typography } from '@material-ui/core';
import DrawerLayout from '../../layouts/DrawerLayout';

function Dashboard() {
	return (
		<DrawerLayout>
			<Typography variant="h2">Admin</Typography>
		</DrawerLayout>
	);
}

export default Dashboard;

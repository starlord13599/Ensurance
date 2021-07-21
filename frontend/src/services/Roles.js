import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';

const roles = {
	admin: [
		{
			title: 'Dashboard',
			icon: DashboardIcon,
			href: '/dashboard',
		},
		{
			title: 'Add User',
			icon: PersonAddIcon,
			href: '/add-user',
		},
	],
};

function getRoles(key) {
	if (!roles[key]) {
		return null;
	}
	return roles[key];
}

export default getRoles;

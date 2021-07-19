function LogInValidate(values) {
	let { email, password } = values;

	if (!email) {
		return { error: 'Email cannot be empty', value: 'email' };
	}

	if (!password) {
		return { error: 'Password cannot be empty', value: 'password' };
	}

	return { error: false, value: null };
}

export default LogInValidate;

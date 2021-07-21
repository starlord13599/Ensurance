import axios from 'axios';

class ApiCalls {
	axiosCalls = axios.create({
		baseURL: process.env.REACT_APP_API_BASE_URL,
	});

	async apiPost({ url, payload }) {
		try {
			const { data, status } = await this.axiosCalls.post(url, payload);
			return { data, status };
		} catch (error) {
			let { status, data } = error.response;
			return { status, data };
		}
	}
}

export default new ApiCalls();

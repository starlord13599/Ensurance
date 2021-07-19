import { useState } from 'react';

function useInput(initialValue) {
	const [state, setState] = useState(initialValue);

	const setInput = (key, value) => {
		setState({ ...state, [key]: value });
	};

	const resetInput = () => {
		setState(initialValue);
	};

	return [state, setInput, resetInput];
}

export default useInput;

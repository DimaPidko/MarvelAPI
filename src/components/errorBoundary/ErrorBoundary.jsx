/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Error from '../error/Error';

const ErrorBoundary = (props) => {
	const [error, setError] = useState(false);

	// static getDerivedStateFromError(error) {
	// 	return { error: true };
	// }

	const componentDidCatch = (err, info) => {
		console.log(err, info);
		setError(true);
	};

	if (error) {
		return <Error />;
	}
	return props.children;
};

export default ErrorBoundary;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Component } from 'react';
import Error from '../error/Error';

class ErrorBoundary extends Component {
	state = {
		error: false,
	};

	// static getDerivedStateFromError(error) {
	// 	return { error: true };
	// }

	componentDidCatch(err, info) {
		console.log(err, info);
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return <Error />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

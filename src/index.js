import React from 'react';
import ReactDOM from 'react-dom';

// const message = 'I am here to save the day!';

// ReactDOM.render(
// 	<h1>my message is: {message} </h1>,
// 	document.getElementById('root')
// );

function App(){
	const [message, setMessage] =React.useState('Friday is always an amazing day');
	
	function handleClick() {
		setMessage('I am going to learn react today')
	}
	return (
		<div>
			<h1>{message} </h1>
			<button onClick={handleClick}>
				Update the message
			</button>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
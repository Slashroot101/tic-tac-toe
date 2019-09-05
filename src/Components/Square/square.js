import React from 'react';
import ReactDOM from 'react-dom';

export default function(props){
	return (
		<button className='square' onClick={props.onClick}>
			{props.value}
		</button>
	)
}
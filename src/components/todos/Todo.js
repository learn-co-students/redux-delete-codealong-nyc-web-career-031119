import React from 'react'

const Todo = props => {
	return (
		<div>
			<span>{props.todo.text}</span>
			<button onClick={() => props.delete(props.todo.text)} value={'DELETE'}/>
		</div>
	)
};

export default Todo;

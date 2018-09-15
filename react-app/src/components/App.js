import React, { Component } from 'react';
import store from './../store';

//action  是对象  对象中必须有个type
const add = () => {
	console.log('---action');
	return {
		type:'ADD'
	}
}


class App extends Component {
	addHandle(){
		//触发action
		store.dispatch(add());
	}
	render() {
		return (
			<div>
				<h1>标题</h1>
				<button onClick = {this.addHandle.bind(this)}>click</button>
			</div>
		);
	}
}

export default App;

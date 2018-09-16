import React, { Component } from 'react';
import store from './../store';
import { connect } from 'react-redux';
//action  是对象  对象中必须有个type
const add = (num) => {
	console.log('---action',num);
	return {
		type:'ADD',
		text:num
	}
}
class App extends Component {
	addHandle(num){
		//触发action
		 store.dispatch(add(num));
	}
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<button onClick = { 
					()=>{
						this.props.add(2)	
					}
				}>click</button>

				{/* <button onClick={this.addHandle.bind(this,2)}>++</button> */}
			</div>
		);
	}
}
//获取state中的值   
const mapStateToProps = (state) => {
	return {
		count:state.count
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		add: (a)=>{
			dispatch(add(a))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

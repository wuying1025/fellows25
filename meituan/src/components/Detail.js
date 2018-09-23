import React, { Component } from 'react'
import 'whatwg-fetch';
import DImg from './detail/DImg';
import Container from './Container';
import Comment from './detail/Comment';


export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row:{},
			results:[]
		}
		
	}
	componentWillMount(){
		fetch('http://www.xiechenxi.cn/welcome/detail/'+this.props.match.params.id)
			.then((response)=>{
				return response.json();
			})
			.then((data)=>{
				this.setState({
					row:data.row,
					results:data.results
				})
				console.log(data);
			})
	}
	render() {
		return (
			<div>
				<DImg row={this.state.row}></DImg>
				<Container title="评价">
					 {
						 this.state.results.map((elem)=>{
							 return <Comment elem={elem} key={elem.id}></Comment>
						 })
					 }
				</Container>
			</div>
		)
	}
}

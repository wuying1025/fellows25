import React, { Component } from 'react';
// class PageA extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props.match.params.id)
//     }
    
//     render() {
//         return (
//             <div>
//                 A页面

//                 {this.props.match.params.id}
//             </div>
//         );
//     }
// }


const Children = ({match}) =>{
    return (
        <div> 
			{
				match?match.params.num:0
			}
			children页面
        </div>
    )
}

export default Children;

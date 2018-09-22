import React, { Component } from 'react';
import PageB from './PageB';
import { 
    BrowserRouter as Router, 
    Route, 
    Link ,
    Switch,
    Redirect,
    Prompt,
    NavLink
} from 'react-router-dom';
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


const PageA = ({match,history}) =>{
    return (
        <div>
            <Router>
                <div>
                    <Link to="/x">x</Link>
                    ||
                    <Link to="/y">y</Link>
                </div>
            </Router>
            <button onClick={ ()=>{
                history.push('/')
            }
            }>click</button>
             A页面
            {/* {match.params.id} */}

            <PageB a="a" bb="bb"></PageB>
        </div>
    )
}

export default PageA;

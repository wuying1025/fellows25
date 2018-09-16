import { combineReducers } from "redux";

//count-Reducer   count 是state中的属性
const count = (state=0,action)=> {
    console.log(state,action);
    switch (action.type){
        case 'ADD':
            return state+action.text;
        default :
            return state;
    }
}

const reducer = combineReducers({
    count
})

export default reducer;

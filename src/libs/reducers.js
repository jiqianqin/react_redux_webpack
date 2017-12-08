import {combineReducers} from "redux";
import counter from 'pages/couter/reducers/counter';
import userInfo from 'pages/userinfo/reducers/userInfo';

//组合多个reducers
// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo:userInfo(state.userInfo,action)
//     }
// }
// 等同于下面的


export default combineReducers({
    counter,
    userInfo
});
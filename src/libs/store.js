import {createStore,applyMiddleware} from 'redux';
// 为了让action创建函数除了返回action对象外，还可以返回函数，我们需要引用redux-thunk
// import thunkMiddleware from 'redux-thunk';
// 中间键
import promiseMiddleware from 'common/middleware/promise';
import combineReducers from './reducers';


// 生成唯一的store
// createStore() 的第二个参数是可选的, 用于设置 state 初始状态
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/counter';14

class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={() => {
                    console.log('调用自增函数');
                    this.props.increment();
                }}>自增
                </button>
                <button onClick={() => {
                    console.log('调用自减函数');
                    this.props.decrement();
                }}>自减
                </button>
                <button onClick={() => {
                    console.log('调用重置函数');
                    this.props.reset()
                }}>重置
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

/**
 *  函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。
 * 也传递dispatch(action)函数到props。
 * 
 * connect接收两个参数，一个mapStateToProps,就是把redux的state，转为组件的Props，
 * 还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数
 */
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
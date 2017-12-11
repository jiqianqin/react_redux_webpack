import React, {Component} from 'react';

import { hoc } from '../containers/couter';

class Counter extends Component {
    render() {
        console.log(this.props);
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

export default hoc(Counter);
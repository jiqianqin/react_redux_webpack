
import { compose,lifecycle,withStateHandlers} from "recompose";
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/counter';14

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        userInfo: state.userInfo
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

export const hoc = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount: function () {
            console.log("竟然进来了？");
        }
    })
);
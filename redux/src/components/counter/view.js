import './reducer';
import * as React from 'react';
import {connect} from 'react-redux';
import * as s from './selector';

export const Counter = connect(
    (state, ownProps) => {
        return {
            id: ownProps.id,
            counter: s.counter(state, ownProps.id),
        };
    },
    (dispatch, ownProps) => {
        return {
            onCounterClick: () => {
                dispatch({type: 'counter_inc', id: ownProps.id});
            },
        };
    }
)(({id, counter, onCounterClick}) => {
    return (
        <button onClick={onCounterClick}>
            {id}: {counter}
        </button>
    );
});

export class StatefulCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    render() {
        return (
            <button onClick={this.incrementCounter}>
                stateful counter: {this.state.count}
            </button>
        );
    }

    incrementCounter() {
        this.setState((prev, props) => ({count: ++prev.count}));
    }
}

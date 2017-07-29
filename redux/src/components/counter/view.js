import './reducer';
import * as React from 'react';
import {connect} from 'react-redux';

function _Counter({id, counter, onCounterClick}) {
    return (
        <button onClick={onCounterClick}>
            {id}: {counter || 0}
        </button>
    );
}

export const Counter = connect(
    (state, ownProps) => {
        return {
            id: ownProps.id,
            counter: state.getIn(['counter', ownProps.id]),
        };
    },
    (dispatch, ownProps) => {
        return {
            onCounterClick: () => {
                dispatch({type: 'counter_inc', id: ownProps.id});
            },
        };
    }
)(_Counter);

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

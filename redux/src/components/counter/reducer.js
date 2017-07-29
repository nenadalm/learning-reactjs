import {regReducer} from '../../core';

regReducer('counter_inc', (state, {id}) =>
    state.updateIn(['counter', id], v => ++v || 1)
);

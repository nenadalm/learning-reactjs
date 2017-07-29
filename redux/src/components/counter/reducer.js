import {regReducer} from '../../core';

regReducer('counter_inc', (state, action) =>
    state.updateIn(['counter', action.id], v => ++v || 1)
);

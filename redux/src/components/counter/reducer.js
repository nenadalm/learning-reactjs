function counterInc(state, action) {
    if (action.type !== 'counter_inc') {
        return state;
    }

    return state.updateIn(['counter', action.id], v => ++v || 1);
}

export {counterInc as reducer};

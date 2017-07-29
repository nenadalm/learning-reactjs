export function counter(state, id) {
    return state.getIn(['counter', id]) || 0;
}

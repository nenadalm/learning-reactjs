function counter(state, id) {
    return state.getIn(['counter', ownProps.id]) || 0;
}

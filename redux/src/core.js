const actionToReducer = {};

export function regReducer(actionId, reducer) {
    if (actionToReducer.hasOwnProperty(actionId)) {
        throw new Error(
            `Reducer for action ${actionId} is already registered.`
        );
    }

    actionToReducer[actionId] = reducer;
}

export function reducer(state, action) {
    if (!actionToReducer.hasOwnProperty(action.type)) {
        if (action.type === '@@redux/INIT') {
            return state;
        }

        throw new Error(`Reducer for action ${action.type} is not registered.`);
    }

    return actionToReducer[action.type](state, action);
}

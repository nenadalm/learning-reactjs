export function combineReducers(...reducers) {
    if (reducers.length === 1) {
        return reducers[0];
    }

    return (state, action) => {
        return reducers.reduce((reducer, next) => reducer(next(state, action)));
    };
}

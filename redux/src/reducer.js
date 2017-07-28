import {reducer as counterReducer} from './components/counter/reducer';
import {combineReducers} from './util';

export const reducer = combineReducers(counterReducer);

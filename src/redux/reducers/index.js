import { combineReducers } from 'redux';
import { resultReducer } from './resultReducer';
import { studentReducer } from './studentReducer';

const CombinedReducers = combineReducers({
    Student: studentReducer,
    Result: resultReducer
});

export default CombinedReducers;
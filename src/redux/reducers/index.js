import { combineReducers } from 'redux';
import { studentReducer } from './studentReducer';

const CombinedReducers = combineReducers({
    Student: studentReducer
});

export default CombinedReducers;
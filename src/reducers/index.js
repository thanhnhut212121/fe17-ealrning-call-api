import { combineReducers } from 'redux';
import nguoiDung from './nguoiDung';
import errors from './errors';

const rootReducer = combineReducers({
    nguoiDung, errors
})

export default rootReducer;
import { combineReducers } from 'redux';

import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
});

export default rootReducer;

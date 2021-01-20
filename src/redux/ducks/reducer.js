import {combineReducers} from 'redux';

import praysStoreReducer from '../reducers/praysStoreReducer';

const rootReducer = combineReducers({
  praysStore: praysStoreReducer,
});

export default rootReducer;

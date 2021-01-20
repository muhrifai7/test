import {combineReducers} from 'redux';

import authStoreReducer from '../reducers/authStoreReducer';
import praysStoreReducer from '../reducers/praysStoreReducer';

const rootReducer = combineReducers({
  authStore: authStoreReducer,
  praysStore: praysStoreReducer,
});

export default rootReducer;

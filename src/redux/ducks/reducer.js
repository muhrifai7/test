import {combineReducers} from 'redux';

import moviesStoreReducer from '../reducers/moviesStoreReducer';

const rootReducer = combineReducers({
  moviesStore: moviesStoreReducer,
});

export default rootReducer;

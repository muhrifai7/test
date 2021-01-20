import {GetPrays} from '../api/prays';

const itemsFetchDataSuccess = (result) => {
  return {
    type: 'GET_PRAYS',
    payload: result,
  };
};

const praysAreLoading = () => {
  return {
    type: 'PRAYS_ARE_LOADING',
  };
};

const getPraysFailure = (error) => ({
  type: 'GET_PRAYS_FAILURE',
  payload: {
    error,
  },
});

export function getPrays() {
  return async (dispatch) => {
    try {
      dispatch(praysAreLoading());
      const result = await GetPrays();
      dispatch(itemsFetchDataSuccess(result));
    } catch (error) {
      getPraysFailure(error.message);
    }
  };
}

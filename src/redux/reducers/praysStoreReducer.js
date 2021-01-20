const defaultState = {
  data: [],
  loading: true,
  error: null,
  page: 1,
  total_pages: 1,
  total_results: 1,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_PRAYS': {
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
      };
    }
    case 'PRAYS_ARE_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_PRAYS_FAILURE': {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

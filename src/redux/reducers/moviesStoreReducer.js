const defaultState = {
  data: [],
  loading: true,
  error: null,
  page: 1,
  total_pages: 1,
  total_results: 1,
  details: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case 'MOVIES_ARE_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_MOVIES_FAILURE': {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        data: [],
      };
    }
    case 'GET_MOVIE': {
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    }

    default:
      return state;
  }
};

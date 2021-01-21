const defaultState = {
  data: [],
  loading: true,
  error: null,
  page: 1,
  total_pages: 1,
  total_results: 1,
  movie: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
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
        data: [action.payload],
      };
    }

    default:
      return state;
  }
};

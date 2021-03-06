import {GetMovies, GetMovie} from '../api/movies';

const fetchAllMovies = (result) => {
  return {
    type: 'GET_MOVIES',
    payload: result,
  };
};

const fetchMovie = (result) => {
  return {
    type: 'GET_MOVIE',
    payload: result,
  };
};

const MoviesAreLoading = () => {
  return {
    type: 'MOVIES_ARE_LOADING',
  };
};

const getMoviesFailure = (error) => ({
  type: 'GET_MOVIES_FAILURE',
  payload: {
    error,
  },
});

export function getMovies(patch) {
  return async (dispatch) => {
    try {
      dispatch(MoviesAreLoading());
      const result = await GetMovies(patch);
      if (patch == 'movie/latest') {
        dispatch(fetchMovie(result));
      } else {
        dispatch(fetchAllMovies(result));
      }
    } catch (error) {
      getMoviesFailure(error.message);
    }
  };
}

import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {getMovies} from '../../redux/ducks/action';
import {useLocalStorage} from '../../utils/uselocalStorage';
import {Gap, MovieList, LoadingSekelaton} from '../../components';
import {COLORS} from '../../constants';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [newMovieNotification, setNewMovieNotification] = useState(false);
  /**
   * Store (persist state) use Async storage
   */
  const [newMovies, setNewMovies] = useLocalStorage('@movies');
  const {data, error, loading} = useSelector(
    (state) => ({
      data: state.moviesStore.data,
      loading: state.moviesStore.loading,
      error: state.moviesStore.error,
      movie: state.moviesStore.movie,
    }),
    shallowEqual,
  );

  useEffect(() => {
    fetchData();
    setNewMovies(data);
  }, [fetchData, newMovies, data]);

  const fetchData = useCallback(async () => {
    if (!newMovies) {
      await callNewMovies('https://api.npoint.io/99c279bb173a6e28359c/data');
      setNewMovies(data);
    }
  }, [data, setNewMovies]);

  const callNewMovies = async (value) => {
    await dispatch(getMovies(value));
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.wraperHeader}>
          <Text style={styles.title}>Movie List</Text>
        </View>
        <Gap height={17} />
        {loading ? (
          <LoadingSekelaton />
        ) : (
          <MovieList
            movies={newMovies}
            navigation={navigation}
            getNewMovies={() =>
              callNewMovies('https://api.npoint.io/99c279bb173a6e28359c/data')
            }
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 10,
  },
  wraperHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    color: COLORS.green,
    fontSize: 25,
  },
});

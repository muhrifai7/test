import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {getMovies} from '../../redux/ducks/action';
import {useLocalStorage} from '../../utils/uselocalStorage';
import {Gap, MovieList, LoadingSekelaton} from '../../components';
import {COLORS} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

  useEffect(() => {
    let isMounted = true;
    const intervalId = setInterval(async () => {
      setNewMovieNotification(true);
      setTimeout(() => {
        setNewMovieNotification(false);
      }, 8000);
    }, 50000);
    return () => {
      setNewMovieNotification(false);
      clearInterval(intervalId); //This is important
      isMounted = false; // Let's us know the component is no longer mounted.
    };
  }, [setNewMovies, newMovies]);

  const fetchData = useCallback(async () => {
    if (!newMovies) {
      await callNewMovies('discover/movie');
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
            getNewMovies={() => callNewMovies('discover/movie')}
          />
        )}
        {newMovieNotification && (
          <View style={styles.newMovie}>
            <Text>Penyimpanan Lokal Telah Diperbaharui </Text>
            <Gap width={5} />
            <TouchableOpacity onPress={() => callNewMovies('movie/latest')}>
              <Button
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="Show"
              />
            </TouchableOpacity>
          </View>
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
  newMovie: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b2bec3',
    bottom: 10,
    marginHorizontal: 8,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
});

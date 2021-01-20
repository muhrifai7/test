import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {getPrays} from '../../redux/ducks/action';
import {useLocalStorage} from '../../utils/uselocalStorage';
import {Gap, PrayList, LoadingSekelaton} from '../../components';
import {COLORS} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  /**
   * Store (persist state) use local storage
   */
  const [newMovies, setNewMovies] = useLocalStorage('@movies');
  const [prays, setPrays] = useState([]);
  const {data, error, loading} = useSelector(
    (state) => ({
      data: state.praysStore.data,
      loading: state.praysStore.loading,
      error: state.praysStore.error,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [prays, fetchData]);

  const fetchData = useCallback(
    () => dispatch(getPrays()),
    // setNewMovies(data),
    [],
  );

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
          <PrayList movies={data} navigation={navigation} />
        )}
        <View style={styles.newMovie}>
          <Text>Penyimpanan Lokal Telah Diperbaharui </Text>
          <Gap width={5} />
          <TouchableOpacity>
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

import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {getPrays} from '../../redux/ducks/action';
import {Banner, Gap, PrayList} from '../../components';
import {COLORS} from '../../contants';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
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

  const fetchData = useCallback(() => dispatch(getPrays()), []);
  console.log(data, 'datatat');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.wraperHeader}>
          <Text style={styles.title}>Waktu Sholat</Text>
          <Text style={styles.title}>Jakarta</Text>
        </View>
        <Banner />
        <Gap height={10} />
        <View style={styles.wraperHeader}>
          <Text style={styles.title}>Muharam 2021</Text>
          <Text style={styles.title}>Januari 2021</Text>
        </View>
        <PrayList movies={data} />
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
    fontSize: 25,
  },
  title: {
    color: COLORS.green,
  },
});

import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {WebView} from 'react-native-webview';

import {COLORS} from '../../constants';
import {getMovie} from '../../redux/ducks/action';

const Movie = ({route}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const {nomor, nama} = route?.params?.data;
  const {data, error, loading} = useSelector(
    (state) => ({
      data: state.moviesStore.details,
      loading: state.moviesStore.loading,
      error: state.moviesStore.error,
    }),
    shallowEqual,
  );

  useEffect(() => {
    fetchData();
  }, [state, getMovie]);

  const fetchData = useCallback(async () => {
    await dispatch(
      getMovie(`https://api.npoint.io/99c279bb173a6e28359c/surat/${nomor}`),
    );
    setState(data);
  }, [state, getMovie]);

  return (
    <ScrollView style={styles.wraper}>
      <Card style={{marginBottom: 20}}>
        <Card.Title style={{color: COLORS.primary2, fontSize: 23}}>
          {nama}
        </Card.Title>

        {state?.map((value, index) => {
          return (
            <View key={index} style={styles.listAyat}>
              <Text style={{...styles.textList, marginBottom: 10}}>
                {value.ar}
              </Text>
              <Card.Divider />
              <Text style={{...styles.textList, marginBottom: 10}}>
                {value.id}
              </Text>
            </View>
          );
        })}
      </Card>
    </ScrollView>
  );
};

export default Movie;
const styles = StyleSheet.create({
  listAyat: {
    alignItems: 'flex-end',
  },
  textList: {
    fontSize: 18,
  },
});

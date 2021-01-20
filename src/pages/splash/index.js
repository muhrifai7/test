import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';

import {NetworkUtils} from '../../utils/network';
import {Logo} from '../../assets/icons';
import {SIZES, FONTS, COLORS} from '../../constants';

const SplashScreen = ({navigation}) => {
  const [error, setError] = useState(false);
  const CheckConnectivity = async () => {
    const isConnected = await NetworkUtils();
    if (isConnected) {
      setError(false);
      setTimeout(() => {
        navigation.replace('OnBoarding');
      }, 800);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    CheckConnectivity();
  }, [error, CheckConnectivity]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Logo width={120} height={120} />
        {error && Alert.alert('You are offline!')}
      </View>
    </View>
  );
};

export default SplashScreen;

const styes = StyleSheet.create({});

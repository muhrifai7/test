import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {Moscoue} from '../../assets';
import {SIZES} from '../../contants';

const Banner = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <Image source={Moscoue} style={styles.image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  image: {
    margin: 0,
    height: SIZES.height * 0.2,
    borderRadius: 6,
  },
});

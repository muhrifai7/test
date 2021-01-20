import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {SIZES} from '../../constants';

const screenWidth = Math.round(SIZES.width);

function Loading() {
  let renderIrem = Array.from({length: 10}, (v, k) => k).map((item, index) => {
    return (
      <SkeletonPlaceholder key={index}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: screenWidth * 0.9,
              height: 70,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
        </View>
      </SkeletonPlaceholder>
    );
  });
  return renderIrem;
}

const SekelatonLoading = ({data}) => {
  return <Loading data={data} />;
};

export default SekelatonLoading;

const styes = StyleSheet.create({});

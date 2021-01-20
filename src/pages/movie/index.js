import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Movie = ({route}) => {
  const {original_title, overview, release_date, title} = route?.params?.data;
  return (
    <View>
      <Card>
        <Card.Title>Movie Detail</Card.Title>
        <Card.Divider />
        <Card>
          <Text style={{marginBottom: 10}}>{title}</Text>
          <Text style={{marginBottom: 10}}>{overview}</Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </Card>
    </View>
  );
};

export default Movie;
const styles = StyleSheet.create({});

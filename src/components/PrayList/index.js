import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import {ListItem} from 'react-native-elements';
import {COLORS, SIZES} from '../../constants';
const Task = ({movies, navigation}) => {
  const handleNavigate = (value) => {
    navigation.push('Movie', {
      data: value,
    });
  };

  const ListTask = ({item}) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => handleNavigate(item)}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.description}>{item?.release_date}</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={movies}
      renderItem={ListTask}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Task;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: COLORS.primary2,
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  description: {
    color: COLORS.gray,
  },
});

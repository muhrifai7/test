import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-elements';

import {Gap} from '../../components';
import {COLORS, SIZES} from '../../constants';
import {getPrays} from '../../redux/ducks/action';
const list = [
  {
    id: 1,
    title: 'Today',
    icon: 'github-alt',
    color: '#517fa4',
  },
  {
    id: 2,
    title: 'Task',
    icon: 'tasks',
    color: '#517fa4',
  },
  {
    id: 3,

    title: 'Planed',
    icon: 'calendar-o',
    color: 'green',
  },
  {
    id: 4,
    title: 'Important',
    icon: 'star-o',
    color: 'red',
  },
];

const Task = (movies) => {
  console.log(movies, 'oa');
  const [selectedId, setSelectedId] = useState(null);

  const handleNavigate = (value) => {
    return;
    navigation.push(value);
  };

  const ListTask = ({item}) => {
    return (
      <TouchableOpacity key={item.i} onPress={() => handleNavigate(item)}>
        <ListItem bottomDivider>
          <Icon name={item?.icon} size={25} color={item?.color} />
          <ListItem.Content>
            <ListItem.Title>{item?.title}</ListItem.Title>
            {/* <Text>{item?.release_date}</Text> */}
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={list}
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
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;

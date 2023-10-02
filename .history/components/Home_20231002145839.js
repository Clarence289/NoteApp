import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { db } from '../config/firabase';

const Home = () => {

  const [title, setTitle]= useState('');
  const [note, setNote] = useState('');

  const svaeNote
  return (
    <View style={styles.container}>
      <Text>Adding Note Screen</Text>
      <TextInput style={styles.titleContainer} placeholder="Title" />
      <TextInput style={styles.noteContainer} placeholder="Note" />
      <TouchableOpacity style={styles.button}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  noteContainer: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;

import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {saveNote} from '../service/firebaseService'


const Home = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  // function to save 
  const handleSaveNote = async ()

  return (
    <View style={styles.container}>
    <Text>Adding Note Screen</Text>
    <TextInput
      style={styles.titleContainer}
      placeholder="Title"
      value={title}
      onChangeText={(text) => setTitle(text)}
    />
    <TextInput
      style={styles.noteContainer}
      placeholder="Note"
      value={note}
      onChangeText={(text) => setNote(text)}
    />
    <TouchableOpacity style={styles.button} onPress={() => firebaseService.saveNote(title, note)}>
      <Text style={styles.buttonText}>Save</Text>
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

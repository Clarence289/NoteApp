import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { db } from '../config/firabase';
import {  addDoc,collection } from 'firebase/firestore';
import {nav}

const Home = () => {

  const [title, setTitle]= useState('');
  const [note, setNote] = useState('');

  const saveNote = async()=>{
    const notesCollectionRef =  collection(db, 'notes');

    const noteData = {
        title,
        note,
        timestamp: new Date().toISOString(),
      }

    try {
      

      const noteRef = await addDoc(notesCollectionRef, noteData);

      setNote('');
      setTitle('');
      alert('Note saved successfully.');
      
    } catch (error) {

      alert('Error saving note:', error);
      
      
    }
  }
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
      <TouchableOpacity style={styles.button} onPress={saveNote}>
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

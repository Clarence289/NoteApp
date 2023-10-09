import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { saveNote } from '../service/firebaseService'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AddNoteScreen = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [titleError, setTitleError] = useState(''); 
  const [noteError, setNoteError] = useState('');

  const navigation = useNavigation();

  // function to save 
  const handleSaveNote = async () => {

    // Reset validation errors
    setTitleError('');
    setNoteError('');

    // Validate input
    if (!title.trim()) {
      setTitleError('Title cannot be empty');
      return;
    }

    if (note.trim().length < 5) {
      setNoteError('Note should be at least 5 characters long');
      return;
    }

    // If input is valid, proceed with saving
    const saved = await saveNote(title, note);

    if (saved) {
      setNote('');
      setTitle('');


      alert('Note saved successfully.');
      navigation.navigate('ListScreen');
    } else {
      alert('Error saving note');
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Adding Note Screen</Text>
    <TextInput
      style={styles.titleContainer}
      placeholder="Title"
      value={title}
      onChangeText={(text) => setTitle(text)}
    />
    {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null} {/* Display title error */}
    <TextInput
      style={styles.noteContainer}
      placeholder="Note"
      value={note}
      onChangeText={(text) => setNote(text)}
    />
    {noteError ? <Text style={styles.errorText}>{noteError}</Text> : null} {/* Display note error */}
    <TouchableOpacity style={styles.button} onPress={handleSaveNote}>
      <Text style={styles.buttonText}>Save</Text>
      <MaterialIcons style={styles.saveIcon} name="save-alt" size={24} color="white" />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47B5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#000',
    fontFamily: 'Moul',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
  },
  titleContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff'
  },
  noteContainer: {
    height: 80,
    borderColor: '#1E24B3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#086ECC',
    padding: 10,
    borderRadius: 5,
    width: 159.767,
    height: 50,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    color: '#FFF', 
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    left: 42
  },
  saveIcon:{
    left: 70
  }
});

export default AddNoteScreen;

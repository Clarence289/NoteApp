import React, { useEffect, useState } from 'react';
import { View, FlatList, Paragraph, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { listNotes } from '../service/firebaseService';
import { removeNoteById } from '../service/RemoveNote';
import { MaterialIcons } from '@expo/vector-icons';

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();

  // Remove note
  const RemoveNote = async (noteId) => {
    const isSuccess = await removeNoteById(noteId);

    if (isSuccess) {
      // If the note was removed successfully, fetch updated notes
      fetchNotes();
      alert('Note removed successfully.');
    } else {
      alert('Error removing note.');
    }
  };

  // Function to fetch notes
  const fetchNotes = async () => {
    const fetchedNotes = await listNotes();
    setNotes(fetchedNotes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Use the useFocusEffect hook to fetch notes when the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      fetchNotes();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.title}>{item.title}</Title>
              <Title style={styles.note}>{item.note}</Title>
              <Title style={styles.date}>{item.timestamp}</Title>
            </Card.Content>
            <Button
              onPress={() => RemoveNote(item.id)} // Call RemoveNote with the note's ID
              style={styles.deleteIcon}
            >
              <MaterialIcons name="delete" size={24} color="red" />
            </Button>
          </Card>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={navigateToHome}
          style={styles.addButton}
          labelStyle={styles.buttonLabel}
        >
          Add New
          <MaterialIcons style={styles.addIcon} name="add-circle" size={24} color="black" />
        </Button>
      </View>
    </View>
  );
};

// Rest

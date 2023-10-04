import React, { useEffect, useState } from 'react';
import { View, FlatList, Paragraph, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { listNotes } from '../service/firebaseService';
import { removeNoteById } from '../service/RemoveNote'
import { MaterialIcons } from '@expo/vector-icons'


const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('AddNoteScreen');
  };

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

  // function to fetch notes
  const fetchNotes = async () => {
    const fetchedNotes = await listNotes();
    setNotes(fetchedNotes);
  }
  
  useEffect(() => {
    fetchNotes();
  }, []);



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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#47B5FF',
    borderRadius: 3,
  },
  card: {
    // width: '90%',
    // marginBottom: 16,
    // alignSelf: 'center',
    width: 155.507,
    height: 160,
    borderWidth: 1,
    borderColor: '#47B5FF',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  title: {
    color: '#256D85',
    fontFamily: 'Moul',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    textAlign: 'center'
  },
  note: {
    fontSize: 16,

  },
  date: {
    color: '#06283D',
    fontFamily: 'Moul',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    left: 70,
    top: 60
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    width: 159.767,
    height: 50,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    boxShadow: '0px 4px 200px 0px rgba(10, 223, 252, 0.50)',
    borderRadius: 10,
    backgroundColor: '#086ECC'
  },
  deleteIcon: {
    width: 25.563,
    height: 24,
    flexShrink: 0,
    bottom: 50,
    left: 100
  },
  // delete:{
  //   width: 25.563,
  //   height: 24,
  //   flexShrink: 0,
  // },
  buttonLabel: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF', 
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  addIcon: {
    width: '34.084px',
    height: ' 32px',
    flexShrink: 0,
    marginLeft: 20,
  
  },
});
export default NoteScreen;
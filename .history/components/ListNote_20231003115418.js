import React, { useState } from 'react';
import { View, FlatList,Paragraph, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { listNotes } from '../service/firebaseService';



const initialNotes = [
  { id: '1', title: 'List Note', content: 'Content of Note 1' },
  { id: '2', title: 'Title', content: 'Note' },
];

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);

  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home'); 
  };


  // function to fetch notes
  const fetchNotes = async ()

  

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              {/* <Paragraph>{item.content}</Paragraph> */}
            </Card.Content>
          </Card>
        )}
      />
      <View style={styles.buttonContainer}>
        {/* <Paragraph>{new Date().toDateString()}</Paragraph> */}
        <Button
          onPress={navigateToHome}
          style={styles.addButton}
          labelStyle={styles.buttonLabel}
        >
          Add New
        </Button>
        {notes.length > 0 && (
          <Button
            style={styles.removeButton}
            labelStyle={styles.buttonLabel}
          
          >
            Remove
          </Button>
        )}
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
  },
  card: {
    width: '90%',
    marginBottom: 16,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
  },
  removeButton: {
    backgroundColor: 'red',
  },
  buttonLabel: {
    color: 'white',
  },
});

export default NoteScreen;

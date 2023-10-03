import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper'; // Corrected import statement
import { useNavigation } from '@react-navigation/native';

const initialNotes = [
  { id: '1', title: 'List Note', content: 'Content of Note 1' },
  { id: '2', title: 'Title', content: 'Note' },
];

const NoteScreen = () => {
  const navigation = useNavigation(); // Added navigation hook

  const navigateToHome = () => {
    navigation.navigate('Home'); // You can replace 'Home' with your desired screen name
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={initialNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph> {/* Added Paragraph component */}
            </Card.Content>
            
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
        </Button>
        {initialNotes.length > 0 && (
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

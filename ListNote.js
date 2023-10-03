import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const initialNotes = [
  { id: '1', title: 'List Note', content: 'Content of Note 1' },
  { id: '2', title: 'Title', content: 'Note' },
];

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={initialNotes} {/* Corrected variable name from 'notes' to 'initialNotes' */}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => ( {/* Added 'index' parameter */}
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
            </Card.Content>
            {index === initialNotes.length - 1 && ( {/* Corrected variable name from 'notes' to 'initialNotes' */}
              <View style={styles.buttonContainer}>
                <Paragraph>{new Date().toDateString()}</Paragraph>
                <Button
                  style={styles.addButton}
                  labelStyle={styles.buttonLabel}
                >
                  Add New
                </Button>
              </View>
            )}
          </Card>
        )}
      </FlatList> {/* Removed extra </View> */}
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
  buttonLabel: {
    color: 'white',
  },
});

export default NoteScreen;
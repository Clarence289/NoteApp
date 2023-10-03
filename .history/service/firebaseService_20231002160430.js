import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from '../config/firabase';
import {  addDoc,collection } from 'firebase/firestore';

export default function firebaseService() {

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
    <View>
      <Text>firebaseService</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
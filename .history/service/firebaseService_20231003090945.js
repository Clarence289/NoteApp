import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from '../config/firabase';
import {  addDoc,collection } from 'firebase/firestore';

// Function to save a note
export async function saveNote(title, note) {
  const notesCollectionRef = collection(db, 'notes');

  const noteData = {
    title,
    note,
    timestamp: new Date().toISOString(),
  }

  try {
    const noteRef = await addDoc(notesCollectionRef, noteData);

    return true; // Return a success indicator or data if needed.

  } catch (error) {
    console.error('Error saving note:', error);
    return false; // Return false or an error indicator if needed.
  }
}

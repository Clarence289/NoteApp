import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from '../config/firabase';
import {  addDoc,collection, getDocs } from 'firebase/firestore';

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

    return true; 

  } catch (error) {
    console.error('Error saving note:', error);
    return false; 
  }
}


//Function to list notes
export async function listNotes(){
  
}
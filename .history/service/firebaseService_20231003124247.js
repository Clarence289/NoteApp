import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from '../config/firabase';
import {  addDoc,collection } from 'firebase/firestore';

// Function to save a note
export async function saveNote(title, note) {
  const notesCollectionRef = collection(db, 'notes');
  const currentDate = new Date();

  // Format date  "YYYY/MM/DD" 
  const formattedDate = `${currentDate.getFullYear()}/${
    currentDate.getMonth() + 1 < 10
      ? '0' + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1
  }/${
    currentDate.getDate() < 10
      ? '0' + currentDate.getDate()
      : currentDate.getDate()
  }`;

  const noteData = {
    title,
    note,
    timestamp: formattedDate,
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
  const notesCollectionRef = collection(db, 'notes');
  const notesQuerySnapshot = await getDocs(notesCollectionRef);

  const notes =[];

  notesQuerySnapshot.forEach((doc)=>{
    notes.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return notes;
}
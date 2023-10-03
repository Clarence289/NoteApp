import { db } from '../config/firebase';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

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

// Function to list notes
export async function listNotes() {
  const notesCollectionRef = collection(db, 'notes');
  const notesQuerySnapshot = await getDocs(notesCollectionRef);
  const notes = [];

  notesQuerySnapshot.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return notes;
}

// Function to delete a note by ID
export async function deleteNoteById(noteId) {
  const noteRef = doc(db, 'notes', noteId);

  try {
    await deleteDoc(noteRef);
    return true; // Return a success indicator if needed.

  } catch (error) {
    console.error('Error deleting note:', error);
    return false; // Return false or an error indicator if needed.
  }
}

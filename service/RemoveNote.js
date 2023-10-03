import { db } from '../config/firabase';
import { collection, doc, deleteDoc } from 'firebase/firestore';


export async function removeNoteById(noteId) {
    const notesCollectionRef = collection(db, 'notes');
    const noteDocRef = doc(db, 'notes', noteId);
  
    try {
      await deleteDoc(noteDocRef);
      return true;
  
    } catch (error) {
      console.error('Error removing note:', error);
      return false;
    }
  }
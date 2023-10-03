import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "../config/firabase";
import { addDoc, collection } from "firebase/firestore";

export default function firebaseService() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const saveNote = async () => {
    const notesCollectionRef = collection(db, "notes");

    const noteData = {
      title,
      note,
      timestamp: new Date().toISOString(),
    };

    try {
      const noteRef = await addDoc(notesCollectionRef, noteData);

      setNote("");
      setTitle("");
      alert("Note saved successfully.");
    } catch (error) {
      alert("Error saving note:", error);
    }
  };

  // get all the available notes from the db "notes" collection
  const fetchNotes = async () => {
    const notesCollectionRef = collection(db, "notes");
    const querySnpshot = await getDocs(notesCollectionRef);

    //  map throuh all the the notes async
    const notes = [];
    querySnpshot.array.forEach((doc) => {
      const noteData = doc.data(); //get & make avaialble data from the document
      notes.push(noteData);
    });
    return notes;
  };

  return (
    <View>
      <Text>firebaseService</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { saveNote } from "../service/firebaseService";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Loader from "./Loader";
import { loadBundle } from "firebase/firestore";

const AddNoteScreen = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [titleError, setTitleError] = useState("");
  const [noteError, setNoteError] = useState("");
  const [loading, setLoading]= useState(false);

  const navigation = useNavigation();

  // function to save
  const handleSaveNote = async () => {
    // Reset validation errors
    setTitleError("");
    setNoteError("");

    // Validate input
    if (!title.trim()) {
      setTitleError("Title cannot be empty");
      return;
    }

    if (note.trim().length < 5) {
      setNoteError("Note should be at least 5 characters long");
      return;
    }

    // If input is valid, proceed with saving
    setLoading(true);
    const saved = await saveNote(title, note);

    if (saved) {
      setNote("");
      setTitle("");
      console.log('Saved...');
      setLoading(false);
      alert('Note saved successfully.');
      navigation.navigate("ListScreen");
    } else {
      alert("Error saving note");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adding Note Screen</Text>
      <TextInput
        style={styles.titleContainer}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}
      <View style={styles.noteContainer}>
        <TextInput style={styles.noteText}
          placeholder="Start typing..."
          value={note}
          onChangeText={(text) => setNote(text)}
        />
        {noteError ? <Text style={styles.errorText}>{noteError}</Text> : null}
      </View>

      <Pressable style={styles.button} onPress={handleSaveNote}>
        <Text style={styles.buttonText}>Save</Text>
        <MaterialIcons
          style={styles.saveIcon}
          name="save-alt"
          size={24}
          color="white"
        />
      </Pressable>
      <Loader loading={loading}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2ab",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#000",
    fontFamily: "sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
    paddingVertical: 12,
    textTransform: "uppercase",
  },
  titleContainer: {
    height: 40,
    borderColor: "#c9c9c9",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 4,
    fontWeight: 600,
  },
  noteText: {
    color: "#242424",
    fontFamily: "Sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    flexWrap: "wrap",
    overflow: "scroll",
    maxHeight: 40,
    lineHeight: 16,
    // flex: .5,
    flexWrap: "wrap",
  },
  noteContainer: {
    flex: .5,
    flexWrap: "wrap",
    height: 120,
    width: 280,
    borderColor: "#c9c9c9",
    borderWidth: 2,
    // marginBottom: 24,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 4,
    letterSpacing: 0.5,
    worddWrap: "break-word",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#1d1d1d",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    height: 50,
    color: "#fbfbfb", //anythning inside must be light
    flexDirection: "row",
    // gap: 12,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "sans-serif",
    fontSize: "38",
    fontWeight: 500,
    letterSpacing: 1.5,
    color: "#fbfbfb",
    textTransform: "uppercase", //capitalize button text
  },
  saveIcon: {
    left: "25%",
  },
  noteColor: {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: "50%",
    backgroundColor: "#5d5a46",
  },
  errorText: {
    color: "#ff3939",
    marginBottom: 10,
    fontSize: 16,
  },
});

export default AddNoteScreen;

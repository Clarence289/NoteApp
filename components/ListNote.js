import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Paragraph,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { listNotes } from "../service/firebaseService";
import { removeNoteById } from "../service/RemoveNote";
import { MaterialIcons } from "@expo/vector-icons";

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("AddNoteScreen");
  };

  // Remove note

  const RemoveNote = async (noteId) => {
    const isSuccess = await removeNoteById(noteId);

    if (isSuccess) {
      // If the note was removed successfully, fetch updated notes
      fetchNotes();
      alert("Note removed successfully.");
    } else {
      alert("Error removing note.");
    }
  };

  // function to fetch notes
  const fetchNotes = async () => {
    const fetchedNotes = await listNotes();
    setNotes(fetchedNotes);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cardContainer}
        data={notes}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.contents}>
                  <Text>
                    <Title style={styles.title}>{item.title}</Title>
                  </Text>
                  {/* note text to have elipsis when max view of text is reached (number of lines) */}
                  <Text numberOfLines={3} ellipsizeMode="tail">
                    <Title style={styles.note}>{item.note}</Title>
                  </Text>
                </View>
              </Card.Content>
              <View style={styles.buttonContainer}>
                <Title style={styles.date}>{item.timestamp}</Title>
                <Pressable
                  onPress={() => RemoveNote(item.id)} // Call RemoveNote with the note's ID
                  style={styles.deleteIcon}
                >
                  <MaterialIcons name="delete" size={24} color="#ff2020" />
                </Pressable>
              </View>
            </Card>
        )}
      />
      <View style={styles.floatBtn}>
      {/* Changed 'Button' to 'Pressable' and a floating btn*/}
        <Pressable
          onPress={navigateToHome}
          style={styles.addButton}
          labelStyle={styles.buttonLabel}
        >
          <MaterialIcons
            style={styles.addIcon}
            name="add-circle"
            size={20}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    // paddingHorizontal: 4,
    height: "80%",
    width: "100%",
    
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ececec",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    borderRadius: 8,
    height: "24%",
    width: "90%",
    // marginHorizontal: 14,
    marginVertical: 4,
    justifyContent: "center",
    // alignItems: "center",
  },
  contents: {
    // backgroundColor: "#ff44ff",
    flexDirection: "column",
    flexWrap: "no-wrap", //we dont wrap paragraphs of rows of contents
    flexShrink: 1,
    overflow: "hidden",
  },
  title: {
    color: "#242424",
    fontFamily: "Sans-serif",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 12,
  },
  note: {
    color: "#242424",
    fontFamily: "Sans-serif",
    fontSize: 10,
    fontStyle: "normal",
    overflow: "hidden",
    height: 50,
    lineHeight: 16,
  },
  date: {
    color: "#242424cc",
    fontFamily: "Sans-serif",
    fontSize: 10,
    fontStyle: "normal",
    letterSpacing: 0.5,
    // textAlign: 'right',
    // right: 0,
    // top:100,

    left: 0,
    marginRight: 200,

    flex: 0.5,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginTop: 12,
    
  },
  addButton: {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    // boxShadow: "0px 4px 200px 0px rgba(10, 223, 252, 0.50)",
    borderRadius: "50%",
    backgroundColor: "#fae04e",
  },
  addIcon: {
    width: "auto",
    height: "auto",
  },

  floatBtn: {
    position: "absolute",
    // right: 0,
    // marginRight: 34,
    bottom: 40,
  },

  deleteIcon: {
    right: 0,
    marginLeft: 36,
    flex: 0.5,
  },
  // delete:{
  //   width: 25.563,
  //   height: 24,
  //   flexShrink: 0,
  // },
  buttonLabel: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  
});
export default NoteScreen;

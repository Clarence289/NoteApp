import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import ListNote from "./ListNote"
=======
import Home from './components/Home';
>>>>>>> 34a1fb91a134314b9c91b2e918fb05ef98bfd6b3

export default function App() {
  return (

    <View style={styles.container}>
<<<<<<< HEAD
=======
      <Home/>
>>>>>>> 34a1fb91a134314b9c91b2e918fb05ef98bfd6b3
      <StatusBar style="auto" />
      <ListNote/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

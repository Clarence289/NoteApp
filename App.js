import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import TestingFetch from './components/testingFetch';

// Replace with Notes List


export default function App() {
  return (

    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* <Home/> */}
      
      {/* replace with actual notes display screen */}
      <TestingFetch/>
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

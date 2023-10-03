import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import NoteScreen from './components/ListNote';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen name="ListScreen" component={NoteScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
import Home from './components/Home';

export default function App() {
  return (

    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
      
    </View>
>>>>>>> 7499b84690c979089105f5699053c7a6b17303a8
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

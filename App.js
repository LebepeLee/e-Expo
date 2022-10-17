import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserDetails from './Pages/UserDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="userdDetails" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})};

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import   SearchVarsity from './Pages/SearchVarsity';
import Varsity from './Pages/Varsity';
const Stack = createNativeStackNavigator();

export default function App() {
 


    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="SearchVarsity" component={SearchVarsity} />
          <Stack.Screen name="Varsity" component={Varsity} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})};

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View, Image} from 'react-native';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Cadastrar from './Screens/cadastrar';

export default function App(){

  const Stack = createStackNavigator();
 
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Telalogin' component={Login}/>
      <Stack.Screen name='TelaCadastros' component={Cadastrar}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
      <Stack.Screen name='TelaHome' component={DrawerFunc} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function DrawerFunc(){
 
  const DrawerNav = createDrawerNavigator();
 
  return(
    <DrawerNav.Navigator initialRouteName='Home'>

      <DrawerNav.Screen name='Home' component={Home}/>

    </DrawerNav.Navigator>
  );
}
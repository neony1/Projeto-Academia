import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Screens/Login';
import Home from './Screens/Home';
import Cadastrar from './Screens/cadastrar';

import Treinos from './Screens/Treinos';
import Braco from './Screens/TreinoBraco';
import Peito from './Screens/TreinoPeito';
import Perna from './Screens/TreinoPerna';


export default function App(){

  const Stack = createStackNavigator();
 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TreinosInicial">
        {/* <Stack.Screen name='Telalogin' component={Login}/>
        <Stack.Screen name='TelaCadastros' component={Cadastrar}/> */}
        {/* <Stack.Screen name='Home' component={Home} /> */}        
        <Stack.Screen name='TreinosInicial' component={Treinos} options={{ headerShown: false }}/> 
        
        <Stack.Screen name='Peito' component={Peito} />
        <Stack.Screen name='Braco' component={Braco} />
        <Stack.Screen name='Perna' component={Perna} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

 
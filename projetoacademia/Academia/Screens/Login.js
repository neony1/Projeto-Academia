import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Bottom, TextInput} from 'react-native';
import { useState } from 'react';


export default function Login({navigation}) {

    const [email, setEmail] = useState(""); // valor do input
    const [senha, setSenha] = useState(""); // valor do input

    return (
        <View>
           <Image source={require('./assets/image.png')} />

            <TextInput
            placeholder='E-mail'
            value = {email}
            onChangeText={setEmail}
            placeholderTextColor={'BLACK'}
            />

            <TextInput
            placeholder='Senha'
            value = {senha}
            onChangeText={setSenha}
            placeholderTextColor={'BLACK'}
            />

        </View>
    );
}
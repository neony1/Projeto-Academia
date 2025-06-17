import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , TextInput} from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({navigation}) {

    const [email, setEmail] = useState(""); // valor do input
    const [senha, setSenha] = useState(""); // valor do input

    const VerificarCadastro = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            navigation.navigate('TelaHome')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    const CadastrarUsuario = async () => {
        createUserWithEmailAndPassword(auth, email, senha) // função que cria o usuario
        .then((userCredential) => {        
        console.log("Usuario cadastrado com sucesso!!", userCredential.user.email); // mostra o email que foi logado e depois vai para a tela de login
        navigation.navigate('TelaHome')
        })
        .catch((error) => {
            console.log('erro', error.message); // mostra o erro no console
        });
    }
    return (

        <View>
           <Image style={styles.img} source={require('../assets/image.png')} />

            <TextInput
            style={styles.txtinput}
            placeholder='E-mail'
            value = {email}            onChangeText={setEmail}
            placeholderTextColor={'BLACK'}
            />
            <br></br>
            <TextInput 
            style={styles.txtinput}
            placeholder='Senha'
            value = {senha}
            onChangeText={setSenha}
            placeholderTextColor={'BLACK'}
            />
            <br></br>
            <Button
                style={styles.bet}
                title="Login"
                color={'black'} // A senha é 1234  
                onPress={VerificarCadastro}
                
            /> <br></br>
            <Button
                style={styles.bet}
                title="Cadastrar-se"
                color={'black'}
                onPress={CadastrarUsuario} // colocar a tela de cadastro.
            />
        </View>
    );
}


const styles =  StyleSheet.create({
    containerProfile:{
creditos: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
},
    alignSelf: 'center',
    fontSize: 30
},
txtinput: {
    borderWidth: 0.5,
    borderRadius: 5,
    width: 350,
    alignSelf: 'center'
   
},
img:{
    height: 350,
    width: 350,
    alignSelf: 'center'
}
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , TextInput} from 'react-native';
import { useState } from 'react';


export default function Login({navigation}) {

    const [email, setEmail] = useState(""); // valor do input
    const [senha, setSenha] = useState(""); // valor do input

    const VerificarUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
            navigation.navigate('Home');
       
        })
        .catch((error) => {
            console.log('erro ao logar:', error.message);
        });
    }
    return (

        <View>
           <Image style={styles.img} source={require('../assets/image.png')} />

            <TextInput
            style={styles.txtinput}
            placeholder='E-mail'
            value = {email}
            onChangeText={setEmail}
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
                onPress={VerificarUser}
                
            /> <br></br>
            <Button
                style={styles.bet}
                title="Cadastrar-se"
                color={'black'}
                onPress={() => navigation.navigate('TelaCadastros')} // colocar a tela de cadastro.
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
import { View, Text, StyleSheet,Image,Button, TextInput} from 'react-native';
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'; //import de uma fnção da biblioteca firebase
import { auth } from '../controller';

export default function Cadastrar({navigation}) {
    const [email, setEmail] = useState("") // valor do input
    const [senha, setSenha] = useState("") // valor do input
    const [nome,  setNome ] = useState("") // valor do input
    const [idade,  setIdade ] = useState("") // valor do input
    const [altura,  setAltura] = useState("") // valor do input
    const [pesoAtual,  setPesoAtual ] = useState("") // valor do input
    const [imc,  setImc ] = useState("") // valor do input
    const [nivel,  setNivel] = useState("") // valor do input
    const [objetivo,  setObjetivo ] = useState("") // valor do input

    const CadastrarUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha) // função que cria o usuario
        .then((userCredential) => {        
        console.log("Usuario cadastrado com sucesso!!", userCredential.user.email); // mostra o email que foi logado e depois vai para a tela de login
        navigation.navigate('Telalogin')
        })
        .catch((error) => {
            console.log('erro', error.message); // mostra o erro no console
        });
    }
    return(
        <View>
            <br></br>
            <Image style={styles.img} source={require('../assets/image.png')} />
            <br></br>
            <Text style={styles.containerProfile}>Cadastra-se aqui</Text>
            <TextInput
                style={styles.txtinput}
                placeholder= "Email" // email
                value={email} // valor do input
                onChangeText={setEmail} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Senha" // senha
                value={senha} // valor do input
                onChangeText={setSenha} // função que pega o valor do input
                secureTextEntry={true} // para esconder a senha (ficam em asterisco)
            /><br></br>
            <Button
                title="Login"
                color={'orange'}
                onPress={() => navigation.navigate('Telalogin')}
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Nome" // senha
                value={nome} // valor do input
                onChangeText={setNome} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Idade" // senha
                value={idade} // valor do input
                onChangeText={setIdade} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Altura" // senha
                value={altura} // valor do input
                onChangeText={setAltura} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Peso atual" // senha
                value={pesoAtual} // valor do input
                onChangeText={setPesoAtual} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="IMC" // senha
                value={imc} // valor do input
                onChangeText={setImc} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Nivel" // senha
                value={nivel} // valor do input
                onChangeText={setNivel} // função que pega o valor do input
            /><br></br>
            <TextInput
                style={styles.txtinput}
                placeholder="Objetivo" // senha
                value={objetivo} // valor do input
                onChangeText={setObjetivo} // função que pega o valor do input
            /><br></br>
            <Button
                title="Login"
                color={'orange'}
                onPress={() => navigation.navigate('Telalogin')}
            />   
        </View>
    )}

const styles =  StyleSheet.create({
    containerProfile:{
creditos: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
},
    alignSelf: 'center',
    fontSize: 30
},
tam: {
    fontSize: 30
},
txtinput: {
    borderWidth: 0.5,
    borderRadius: 5,
   
},
img:{
    height: 350,
    width: 350,
    alignSelf: 'center'
    }
})
 
 



 

    
 



 
import { View, Text, StyleSheet,Image,Button, TextInput, ScrollView} from 'react-native';
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

    const CadastrarUsuario = async () => {
        createUserWithEmailAndPassword(auth, email, senha) // função que cria o usuario
        .then((userCredential) => {        
        console.log("Usuario cadastrado com sucesso!!", userCredential.user.email); // mostra o email que foi logado e depois vai para a tela de login
        navigation.navigate('TelaHome')
        })
        .catch((error) => {
            console.log('erro', error.message); // mostra o erro no console
        });

        try{ // função assíncrona para cadastrar o produto async é para esperar a resposta do banco de dados
            await addDoc(collection(db, 'clientes'), {
                nome,
                idade: parseInt(idade),
                altura: parseFloat(altura),
                pesoAtual: parseFloat(pesoAtual),
                imc: parseFloat(imc),
                nivel,
                objetivo
            });
            setNome();
            setIdade();
            setAltura();
            setPesoAtual();
            setImc();
            setNivel();
            setObjetivo();
            console.log('Cliente cadastrado com sucesso!'); // mostra o email que foi logado e depois vai para a tela de login
        }
        catch{
            console.log('erro ao cadastrar o cliente', error)
        }
    }
    return(
        <ScrollView>
            <Image style={styles.img} source={require('../assets/image.png')} />
            <Text style={styles.containerProfile}>Cadastra-se aqui</Text>
            <TextInput
                style={styles.txtinput}
                placeholder= "Email" // email
                value={email} // valor do input
                onChangeText={setEmail} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Senha" // senha
                value={senha} // valor do input
                onChangeText={setSenha} // função que pega o valor do input
                secureTextEntry={true} // para esconder a senha (ficam em asterisco)
            />
        
            <TextInput
                style={styles.txtinput}
                placeholder="Nome" // senha
                value={nome} // valor do input
                onChangeText={setNome} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Idade" // senha
                value={idade} // valor do input
                onChangeText={setIdade} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Altura" // senha
                value={altura} // valor do input
                onChangeText={setAltura} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Peso atual" // senha
                value={pesoAtual} // valor do input
                onChangeText={setPesoAtual} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="IMC" // senha
                value={imc} // valor do input
                onChangeText={setImc} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Nivel" // senha
                value={nivel} // valor do input
                onChangeText={setNivel} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput}
                placeholder="Objetivo" // senha
                value={objetivo} // valor do input
                onChangeText={setObjetivo} // função que pega o valor do input
            />
            <Button
                title="Login"
                color={'orange'}
                onPress={CadastrarUsuario}
            />
        </ScrollView> 
    )}

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
 
 



 

    
 



 
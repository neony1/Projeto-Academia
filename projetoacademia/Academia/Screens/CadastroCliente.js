import { View, StyleSheet, Button, TextInput} from 'react-native';
import { useState } from "react";
import {db} from '../controller';
import { collection, addDoc } from "firebase/firestore";
 
export default function CadastroProduto(){
 
    const [nome, setNome] = useState("") // valor do input
    const [valor, setValor] = useState("") // valor do input
    const [imagem, setImagem] = useState("") // valor do input
 
    const CadastrarProduct = async () => {
        try{ // função assíncrona para cadastrar o produto async é para esperar a resposta do banco de dados
            await addDoc(collection(db, 'produtos'), {
                nome,
                valor: parseFloat(valor), // vaor quebrado
                imagem
            });
            setNome();
            setValor();
            setImagem();
            console.log('Produhto cadastrado com sucesso!'); // mostra o email que foi logado e depois vai para a tela de login
        }
        catch{
            console.log('erro ao cadastrar o produto', error)
        }
    }
 
    return(
 
        <View>
            <TextInput
                style={styles.containder} // estilização do input
                placeholder= "Nome" // nome
                value={nome} // valor do input
                onChangeText={setNome} // função que pega o valor do input
            />
            <TextInput
                style={styles.container} // estilização do input
                placeholder="Valor" // senha
                value={valor} // valor do input
                onChangeText={setValor} // função que pega o valor do input
            />
            <TextInput
                style={styles.container} // estilização do input
                placeholder="Imagem" // senha
                value={imagem} // valor do input
                onChangeText={setImagem} // função que pega o valor do input
            />
 
            <Button
                title="Cadastrar produto"
                color={'orange'}
                onPress={CadastrarProduct}
            />
       
        </View>
    )
}
 

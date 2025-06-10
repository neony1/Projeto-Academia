import { View, Text, StyleSheet,Image,Button, TextInput} from 'react-native';
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'; //import de uma fnção da biblioteca firebase
import { auth } from './controller';

export default function Cadastrar({navigation}) {
    const [email, setEmail] = useState("") // valor do input
    const [senha, setSenha] = useState("") // valor do input

}

 

    

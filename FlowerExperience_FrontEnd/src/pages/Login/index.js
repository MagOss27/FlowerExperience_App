import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da biblioteca FontAwesome
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { styles } from '../Login/styleLogin.js';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


// Objeto para armazenar dados do login
let armazenandoLogin = {
    nome: '',
    email: '',
    senha: ''
}

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.ScrollTamanho}>
                <Body />
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    )
}

// Função para renderizar a parte superior (Header)
function Header() {
    return (
        <View style={styles.Header}></View>
    );
}

// Função para renderizar a parte central (Body)
function Body() {
    const navigation = useNavigation();
    const route = useRoute();
    // const objetoRecebidoCadastro = route.params.objetoRecebidoCadastro;
    const [entradaEmail, setEntradaEmail] = useState('')
    const [entradaSenha, setEntradaSenha] = useState('');
    const [inputSenha, setInputSenha] = useState(true);

    // Função para lidar com o evento de login
    async function Login() {

        if (entradaEmail === '' || entradaSenha === '') {
            alert('Preencha todos os campos')

        } else {

            //http://Endereço-IPv4:19007/user/login
            const usuario = await Axios.post('http://192.168.0.108:19007/user/login', {

                email: entradaEmail,
                senha: entradaSenha

            });

            await AsyncStorage.setItem("idUser", JSON.stringify(usuario.data.usuario.idusuarios))

            if (usuario.status == 200) {

                await AsyncStorage.setItem('online', JSON.stringify(true))
                navigation.navigate("Feed")

            }
        }
    }

    function pageCadastro() {

        navigation.navigate('Cadastro')

    }

    return (

        <View style={styles.Body}>
            <View style={styles.HeaderBody}>
                <Text style={styles.titleBody}>Login</Text>
            </View>

            <View style={styles.conteudo}>
                {/* Campo de entrada para o nome */}
                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Email</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="inbox" size={30} color='#000000' style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaEmail}
                        onChangeText={setEntradaEmail}
                        placeholder='Email'
                    />
                </View>

                {/* Campo de entrada para a senha */}
                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Senha</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={30} color='#000000' style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#FFFFFF'
                        value={entradaSenha}
                        onChangeText={(texto) => setEntradaSenha(texto)}
                        secureTextEntry={inputSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setInputSenha(!inputSenha)}>
                        {inputSenha ?
                            <Ionicons name='eye' color='#FFFFFF' size={25} /> //olho aberto
                            :
                            <Ionicons name='eye-off' color='#FFFFFF' size={25} /> //olho fechado
                        }
                    </TouchableOpacity>
                </View>

                {/* Link para recuperação de senha */}
                <TouchableOpacity>
                    <Text style={styles.esqueciSenha} onPress={pageCadastro}>Não possuo cadastro</Text>
                    <View style={styles.horizontalLinha}></View>
                </TouchableOpacity>
            </View>

            {/* Botão de login na parte inferior */}
            <View style={styles.FooterBody}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <View style={styles.button}>
                        <Text style={styles.nomesBotao} onPress={Login}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

};



// Função para renderizar a parte inferior (Footer)
function Footer() {
    return (
        <View style={styles.Footer}></View>
    );
}

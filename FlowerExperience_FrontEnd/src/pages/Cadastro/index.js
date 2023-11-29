import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Cadastro/styleCadastro.js'
import axios from 'axios';

// Objeto para armazenar dados do formulário de cadastro
let armazenandoCadastro = {
    nome: '',
    email: '',
    senha: '',
    confirmSenha: ''
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

function Header() {
    return (
        <View style={styles.Header}></View>
    );
}

function Body() {
    // Hook para navegação
    const navigation = useNavigation();
    // Estados para os inputs
    const [entradaNome, setEntradaNome] = useState('')
    const [entradaEmail, setEntradaEmail] = useState('')
    const [entradaSenha, setEntradaSenha] = useState('')
    const [inputSenha, setInputSenha] = useState(true)
    const [entradaConfirmSenha, setEntradaConfirmSenha] = useState('')
    const [inputConfirmSenha, setInputConfirmSenha] = useState(true)

    // Função para realizar o cadastro
    async function Cadastrar() {
        if (entradaNome == '' || entradaEmail == '' || entradaSenha == '' || entradaConfirmSenha == '') {
            alert('Preencha todos os campos')
        } else if (entradaSenha !== entradaConfirmSenha) {
            alert('As senhas não conferem')
        } else {
            // Atribui os valores dos inputs ao objeto de armazenamento
            armazenandoCadastro.nome = entradaNome
            armazenandoCadastro.email = entradaEmail
            armazenandoCadastro.senha = entradaSenha


            //http://Endereço-IPv4:19007/register
            const resultado = await axios.post('http://192.168.0.108:19007/register', armazenandoCadastro)
                .then(response => response.data.cadastro)


            // Salva os dados do cadastro e os exibe no console
            // const infoCadastradas = armazenandoCadastror
            console.log(resultado)

            // Navega para a tela de login, passando os dados do cadastro como parâmetro
            navigation.navigate('Login', { objetoRecebidoCadastro: resultado })
        }
    }

    return (
        <View style={styles.Body}>
            <View style={styles.HeaderBody}>
                <Text style={styles.HeaderBodyText}>Cadastre-se</Text>
            </View>

            <View style={styles.conteudo}>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Nome</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="inbox" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaNome}
                        onChangeText={setEntradaNome}
                        placeholder='Nome'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>E-mail</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="inbox" size={30} color='#FFFFFF' style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaEmail}
                        onChangeText={setEntradaEmail}
                        placeholder='Email'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Senha</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={30} color='#FFFFFF' style={styles.icon} />
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

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Confirmar Senha</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={30} color='#FFFFFF' style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#FFFFFF'
                        value={entradaConfirmSenha}
                        onChangeText={(texto) => setEntradaConfirmSenha(texto)}
                        secureTextEntry={inputConfirmSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setInputConfirmSenha(!inputConfirmSenha)}>
                        {inputConfirmSenha ?
                            <Ionicons name='eye' color='#FFFFFF' size={25} /> //olho aberto
                            :
                            <Ionicons name='eye-off' color='#FFFFFF' size={25} /> //olho fechado
                        }
                    </TouchableOpacity>
                </View>

                {/* Botão de cadastro */}
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={styles.buttonStyle}>
                        <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                            <Text style={styles.nomesBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.esqueciSenha} onPress={() => navigation.navigate('Login')}>Já Possuo Cadastro</Text>
                        <View style={styles.horizontalLinha}></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function Footer() {
    return (
        <View style={styles.Footer}></View>
    );
}

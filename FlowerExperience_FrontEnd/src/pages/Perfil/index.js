import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Perfil/stylePerfil.js'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

    return (
        <View style={styles.container}>
            <Header />

            <Body />

            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}

function Header() {

    return (

        <View style={styles.Header}></View>

    );
}

function Body() {

    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [senha, setSenha] = useState(true);
    const [usuarioNome, setUsuarioNome] = useState('');
    const [usuarioEmail, setUsuarioEmail] = useState('');
    const [usuarioSenha, setUsuarioSenha] = useState('');



    ////Função de LISTAR dados do USUÁRIO\\\\
    useEffect(() => {

        async function getData() {

            const id = await AsyncStorage.getItem('idUser')

            console.log(id)
            try {
                //http://Endereço-IPv4:19007/user
                const usuario = await Axios.get('http://192.168.0.108:19007/user/' + id).then(response => response.data.usuario[0])
                console.log(usuario)
                setUsuarioNome(usuario.nome)
                setUsuarioEmail(usuario.email)
                setUsuarioSenha(usuario.senha)

            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, [])



    //// Função de EDITAR dados do USUÁRIO\\\\   
    async function editData() {
        const id = await AsyncStorage.getItem('idUser');

        try {
            //http://Endereço-IPv4:19007/user/edit
            const mensagem = await Axios.put('http://192.168.0.108:19007/user/edit/' + id, {
                nome: usuarioNome,
                email: usuarioEmail,
                senha: usuarioSenha
            }).then(response => response.data.message);

            if (mensagem === 'Usuário editado com sucesso') {
                alert('Usuário editado com sucesso!');
            }
            console.log(mensagem);

        } catch (error) {
            console.log(error);
        }
    }


    //// Função de EXCLUIR dados do USUÁRIO\\\\     
    async function deleteData() {

        const id = await AsyncStorage.getItem('idUser')

        console.log(id)
        try {
             //http://Endereço-IPv4:19007/user/deleteUser
            const mensagem = await Axios.delete('http://192.168.0.108:19007/user/deleteUser/' + id).then(response => response.data.message)
            if (mensagem == 'usuário excluido') {
                alert('Usuário excluido com sucesso!')

                AsyncStorage.clear

                navigation.navigate("Cadastro")

            }
            console.log(mensagem)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ScrollView style={styles.ScrollTamanho}>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ maxWidth: 750, width: "95%", height: '100%', }}>
                    <View style={styles.HeaderBody}>
                        <Image
                            source={require('./../../../src/Icons/usuario.png')} style={{ width: 150, height: 150 }}
                        />
                    </View>
                    <View style={styles.DivisoesImputs}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelEscritas}>Nome</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="user" size={30} color='#FFFFFF' style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                value={usuarioNome}
                                placeholderTextColor='#FFFFFF'
                                onChangeText={(text) => setUsuarioNome(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.DivisoesImputs}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelEscritas}>E-mail</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="inbox" size={30} color="#000" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                value={usuarioEmail}
                                placeholder="Email"
                                placeholderTextColor='#FFFFFF'
                                onChangeText={(text) => setUsuarioEmail(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.DivisoesImputs}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelEscritas}>Senha</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="lock" size={30} color='#FFFFFF' style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor='#FFFFFF'
                                value={usuarioSenha}
                                onChangeText={(text) => setUsuarioSenha(text)}
                                secureTextEntry={senha}
                            />
                            <TouchableOpacity style={styles.icon} onPress={() => setSenha(!senha)}>
                                {senha ?
                                    <Ionicons name='eye' color='#FFFFFF' size={25} />
                                    :
                                    <Ionicons name='eye-off' color='#FFFFFF' size={25} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.DivisoesImputsButton}>

                        <View style={styles.buttonStyle}>

                            <TouchableOpacity style={styles.button} onPress={editData}>
                                <Text style={styles.nomesBotao}>Editar User</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonStyle}>

                            <TouchableOpacity style={styles.button} onPress={deleteData}>
                                <Text style={styles.nomesBotao}>Excluir User</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

function Footer() {

    const navigation = useNavigation();

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <Image
                        source={require('./../../../src/Icons/feed.png')} style={{ width: 60, height: 60 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ marginTop: 10 }}>
                    <Image
                        source={require('./../../../src/Icons/usuario.png')} style={{ width: 68, height: 68 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                    <Image
                        source={require('./../../../src/Icons/favoritos.png')} style={{ width: 60, height: 60 }}
                    />
                </TouchableOpacity>
            </View>

        </View>

    );
}
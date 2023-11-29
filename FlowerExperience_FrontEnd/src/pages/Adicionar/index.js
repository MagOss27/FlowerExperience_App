import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da rede
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Adicionar/styleAdicionar.js'
import { useMeuContexto } from '../Contexto/index.js';


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
    const [entradaSobre, setEntradaSobre] = useState('')
    const [entradaLuz, setEntradaLuz] = useState('')
    const [entradaAgua, setEntradaAgua] = useState('')
    const [entradaFertilizante, setEntradaFertilizante] = useState('')
    const [entradaOrigem, setEntradaOrigem] = useState('')

    const { createObject } = useMeuContexto()

    // Função para realizar o cadastro Corretamente
    function Cadastrar() {
       
        if (entradaNome == '' || entradaSobre == '' || entradaLuz == '' || entradaFertilizante == '' || entradaOrigem == '') {
            alert('Preencha todos os campos!')

        } else {
            // Redirecionar para outra página após a execução da função Cadastrar
            alert('Planta adicionada com Sucesso!')

            //Armazena os Dados dos Inputs dentro do Objeto
            const obj = {
                titulo: entradaNome,
                sobre: entradaSobre,
                luz: entradaLuz,
                agua: entradaAgua,
                fertilizante: entradaFertilizante,
                origem: entradaOrigem,
                imagensUm: 'caminho_da_imagem_1',
                imagensDois: 'caminho_da_imagem_2'
            };
            createObject({ obj })
            navigation.navigate('Feed');
          
        }
    }

    return (
        <View style={styles.Body}>
            <View style={styles.HeaderBody}>

                <View style={styles.view_foto_um}>

                    <TouchableOpacity style={styles.add_foto_um}>
                        <Icon name="camera" size={85} color="#24c28d" style={styles.icon_foto} />


                    </TouchableOpacity>

                </View>

                <View style={styles.view_foto_dois}>

                    <TouchableOpacity style={styles.add_foto_um}>
                        <Icon name="camera" size={85} color="#24c28d" style={styles.icon_foto} />


                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.conteudo}>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Nome</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaNome}
                        onChangeText={setEntradaNome}
                        placeholder='Digite o nome da planta...'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Sobre</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaSobre}
                        onChangeText={setEntradaSobre}
                        placeholder='Digite sobre a planta...'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Luz</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaLuz}
                        onChangeText={setEntradaLuz}
                        placeholder='Digite sobre a iluminação...'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Regas</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sobre as regas...'
                        placeholderTextColor='#FFFFFF'
                        value={entradaAgua}
                        onChangeText={setEntradaAgua}
                    />

                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Adubo</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sobre o adubo...'
                        placeholderTextColor='#FFFFFF'
                        value={entradaFertilizante}
                        onChangeText={setEntradaFertilizante}
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Origem</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#FFFFFF'
                        value={entradaOrigem}
                        onChangeText={setEntradaOrigem}
                        placeholder='Digite sobre a origem...'
                    />
                </View>

                {/* Botão de cadastro */}
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.button} onPress={Cadastrar} >
                        <Text style={styles.nomesBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function Footer() {
    const navigation = useNavigation();

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <Image
                        source={require('./../../../src/Icons/voltar.png')} style={{ width: 60, height: 60 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}></View>

            <View style={styles.footerDireita}></View>

        </View>

    );
}

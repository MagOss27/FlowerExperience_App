import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import Feather from "@expo/vector-icons/Feather"; //importar icones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Administrador/styleAdministrador.js'


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
    );
}

function Header() {

    return (

        <View style={styles.Header}></View>

    );

}

let plantas_listadas = [

    {
        titulo: "Zamioculca",
    },
    {
        titulo: "Dipladenia",
    },
    {
        titulo: "Peperômia",
    },
    {
        titulo: "Espada de São Jorge",
    },
    {
        titulo: "Samambaia",
    },
    {
        titulo: "Costela-de-Adão",
    },
    {
        titulo: "Orquídea",
    },
    {
        titulo: "Antúrio",
    },
    {
        titulo: "Bouganville",
    },
    {
        titulo: "Begônia",
    },

]


function Body() {

    const navigation = useNavigation();
    
    return (

        <View style={styles.Body}>

            <View style={styles.Header_Body}>

                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#8b8a7a' }}>Painel Administrador</Text>

            </View>

            <View style={styles.linha}></View>

            <ScrollView contentContainerStyle={styles.grid}>

                {plantas_listadas.map((objPlanta, index) => (

                    <View style={styles.card} key={index}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{}}>
                                <View style={styles.nomePlanta}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginLeft: 20 }}>•  {objPlanta.titulo}</Text>
                                </View>
                            </View>

                            <View style={{ padding: 1, flexDirection: "row" }}>

                                <View style={styles.btn_editar_planta}>
                                    <TouchableOpacity >
                                        <FontAwesome
                                            name='pencil'
                                            size={25}
                                            color='#8b8a7a'
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.btn_excluir_planta}>
                                    <TouchableOpacity >
                                        <FontAwesome
                                            name='trash'
                                            size={25}
                                            color='red'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>

                    </View>

                ))}
                <View style={styles.view_botao}>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity style={styles.button_add_planta} onPress={() => navigation.navigate('Adicionar')} >
                            <Text style={styles.text_add_planta}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>

        </View>

    );

}

function Footer() {

    const navigation = useNavigation();

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <FontAwesome
                        name='home'
                        size={45}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='pencil'
                        size={55}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                    <FontAwesome
                        name='star'
                        size={45}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

        </View>

    );

}
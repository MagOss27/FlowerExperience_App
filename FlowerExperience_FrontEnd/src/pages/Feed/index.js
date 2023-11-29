import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Text, TextInput, Modal } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';
import { styles } from '../Feed/styleFeed.js'
import { useMeuContexto } from '../Contexto/index.js';
import MenuBar from '../Feed/MenuBar.js'; // Import the MenuBar component
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone desejado

const Stack = createNativeStackNavigator();

////Navegação entre Telas\\\\
export default function Feed() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Body" component={Body}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="App" component={App}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MostrarPlanta" component={MostrarPlanta}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
////Fim da Navegação entre Telas\\\\


////App Da Tela de Feed\\\\
export function App() {

    const navigation = useNavigation()
    const [mostrarinforma, setMostrarinforma] = useState(<Body />);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.ScrollTamanho}>
                {mostrarinforma}
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}
////Fim do App Da Tela de Feed\\\\


////Body da Tela de Feed\\\\
function Body() {

    const navigation = useNavigation()
    const { plantPesquisa, setPlantPesquisa, plantInfo } = useMeuContexto();

    // Função para Aparecer o MenuLateral
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    ////Comandos para Pesquisar Planta, através do Título\\\\
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const searchPlant = () => {
        const formattedSearchTerm = searchTerm.toLowerCase();
        const foundPlant = plantInfo.find((planta) =>
            planta.titulo.toLowerCase() === formattedSearchTerm
        );

        if (foundPlant) {
            setPlantPesquisa(foundPlant);
            navigation.navigate('MostrarPlanta', { id: foundPlant.id });
        } else {
            setPlantPesquisa(null);
            // Lógica para lidar com planta não encontrada
            Alert.alert('Planta não encontrada', 'A planta pesquisada não foi encontrada.');
        }
    };
    ////Fim dos Comandos para Pesquisar Planta, através do Título\\\\

    return (

        <View style={styles.container}>

            <View style={styles.Header}>
                <View style={styles.iconsHeader}>
                    <TouchableOpacity onPress={toggleMenu}>
                        <Image
                            source={require('./../../../src/Icons/navegacao.png')} style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>

                    {showSearch ? (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={{ flex: 1, height: 40, borderColor: '#eaead4', borderWidth: 10, marginBottom: 20, paddingHorizontal: 10, backgroundColor: '#eaead4' }}
                                    placeholder="Pesquisar planta..."
                                    onChangeText={text => setSearchTerm(text)}
                                    value={searchTerm}
                                    onSubmitEditing={searchPlant}
                                />
                                <TouchableOpacity onPress={searchPlant} style={{ backgroundColor: '#eaead4', borderRadius: 5, height: 40, paddingHorizontal: 10, marginBottom: 20, marginLeft: 20, justifyContent: "center", alignItems: 'center' }}>
                                    <Icon name="search" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <Text></Text>
                    )}

                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            source={require('./../../../src/Icons/usuario.png')} style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView style={styles.ScrollTamanho}>

                <View style={styles.Body}>

                    <ScrollView contentContainerStyle={styles.grid}>

                        {plantInfo.map((objPlanta, index) => (

                            <View style={styles.card} key={index}>
                                <View style={{ justifyContent: 'space-around', width: "100%" }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <View style={styles.principalImage}>
                                            <View style={styles.image}>
                                                <Image
                                                    style={styles.plantas}
                                                    source={objPlanta.imagensUm}
                                                />
                                            </View>
                                        </View>

                                        <View style={styles.elementos}>

                                            <View style={styles.nomePlanta}>
                                                <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 45 }}>{objPlanta.titulo}</Text>
                                            </View>
                                            <View style={styles.descricao}>
                                                <Text style={{ fontSize: 14, color: '#8b8a7a', marginTop: 5, marginRight: 30 }}>{objPlanta.sobre}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.principalBtn}>
                                        <View style={styles.btn}>
                                            <TouchableOpacity onPress={() => {
                                                // setId(objPlanta.id)
                                                // navigation.navigate('MostrarPlanta')
                                                navigation.navigate('MostrarPlanta', { id: objPlanta.id });
                                            }}>
                                                <FontAwesome
                                                    name='plus'
                                                    size={25}
                                                    color='white'
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>


                                <View style={styles.linha}></View>
                            </View>

                        ))}

                    </ScrollView>

                </View>

            </ScrollView>

            {isMenuOpen && <MenuBar onCloseMenu={toggleMenu} />}

            <View style={styles.Footer}>

                <View style={styles.footerEsquerda}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {!showSearch ? (
                            <TouchableOpacity onPress={() => {
                                setShowSearch(true)
                              
                            }}>
                                <Image
                                    source={require('./../../../src/Icons/pesquisar.png')} style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => {
                                setShowSearch(true)
                                navigation.navigate('')
                            }}>
                                <Image
                                    source={require('./../../../src/Icons/pesquisar.png')} style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <View style={styles.footerMeio}>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={{ marginTop: 10 }}>
                        <Image
                            source={require('./../../../src/Icons/feed.png')} style={{ width: 68, height: 68 }}
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
        </View>

    );
}
////Fim da Tela de Feed\\\\



////Tela de Informativo-Função para Mostrar toda tela ao clicar nos Botões da Tela de Feed\\\\
function MostrarPlanta() {

    const { plantInfo, plantFavoritos } = useMeuContexto();

    const [isModalVisible, setIsModalVisible] = useState(false);

    // descrição do primeiro Modal
    const [modalTextUm, setModalTextUm] = useState('');

    // descrição do segundo Modal
    const [modalTextDois, setModalTextDois] = useState('');

    // icone dos modal
    const [modalIcon, setModalIcon] = useState('');

    // cor do icone do modal
    const [modalColor, setModalColor] = useState('');


    ////Função para Favoritar uma Planta\\\\
    function favoritarPlantas() {

        const isAlreadyFavorited = plantFavoritos.some(item => item.id === planta.id);

        if (!isAlreadyFavorited) {
            plantFavoritos.push(planta);

            setModalTextUm('Esta planta foi adicionada aos seus favoritos!');
            // Exibir o modal ao favoritar
            setIsModalVisible(true);
            // Exibir icone
            setModalIcon('check');
            // Cor do icone
            setModalColor('#24c28ded');

        } else {

            setModalTextUm('Esta planta já foi adicionada aos seus favoritos!');
            // Exibir o modal ao favoritar
            setIsModalVisible(true);
            // Exibir icone
            setModalIcon('warning');
            // Cor do icone
            setModalColor('red');

        }
    }
    ////Fim da Função para Favoritar uma Planta\\\\

    const route = useRoute();
    const idEscolhido = route.params.id;
    const planta = plantInfo.find((planta) => planta.id === idEscolhido);

    const { titulo, sobre, luz, agua, fertilizante, origem, imagemUm, imagemDois, id } = planta;


    console.log(idEscolhido)
    const navigation = useNavigation()

    // for (let index = 0; index < plantInfo.length; index++) {
    //     if (plantInfo[index].id == id) {
    //         setPlanta(plantInfo[index])

    //     }

    // }

    const handleNavigateToFeed = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Feed' }]

        });
    };

    return (

        <View style={styles.container}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(false);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                        <FontAwesome
                            style={{ marginBottom: 10 }}
                            name={modalIcon}
                            size={45}
                            color={modalColor}
                        />
                        <Text style={styles.modalDescription}>
                            {modalTextUm}
                        </Text>
                        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                            <View style={{ width: 75, height: 40, backgroundColor: '#24c28d', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 22, color: 'white', marginBottom: 5, }}> OK </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.Header}>
                <View style={styles.iconsHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                            source={require('./../../../src/Icons/navegacao.png')} style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            source={require('./../../../src/Icons/usuario.png')} style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                </View>
            </View >
            <ScrollView style={styles.ScrollTamanho}>
                <View style={styles.Body}>
                    <View style={styles.conteudo}>
                        <View style={styles.HeaderBody}>
                            <View style={styles.HeaderBodyEsquerda}>
                                <View style={styles.HeaderBodyImagemUm}>
                                    <View style={styles.imagemUm}>
                                        <Image
                                            source={planta.imagensUm}
                                            style={{ width: '100%', height: '100%', borderRadius: 17, }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.HeaderBodyTituloPlanta}>
                                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#8b8a7a', padding: 3, }}>{titulo}</Text>
                                </View>
                            </View>
                            <View style={styles.HeaderBodyDireita}>
                                <View style={styles.imagemDois}>
                                    <Image
                                        source={planta.imagensDois}
                                        style={{ width: '100%', height: '100%', borderRadius: 17, }}
                                    />
                                </View>
                            </View>

                        </View>

                        <View style={styles.DivInforma}>
                            <View style={styles.emoji}>
                                <Text style={{ fontSize: 35 }}>☀️</Text>
                            </View>
                            <View style={styles.InformaTextoDiv}>
                                <Text>
                                    <Text style={styles.tituloDescricao}>LUZ: </Text>
                                    <Text style={styles.TextoDescricao}>{planta.luz}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.DivInforma}>
                            <View style={styles.emoji}>
                                <Text style={{ fontSize: 35 }}>💧</Text>
                            </View>
                            <View style={styles.InformaTextoDiv}>
                                <Text>
                                    <Text style={styles.tituloDescricao}>ÁGUA: </Text>
                                    <Text style={styles.TextoDescricao}>{planta.agua}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.DivInforma}>
                            <View style={styles.emoji}>
                                <Text style={{ fontSize: 35 }}>🌱</Text>
                            </View>
                            <View style={styles.InformaTextoDiv}>
                                <Text>
                                    <Text style={styles.tituloDescricao}>FERTILIZANTE: </Text>
                                    <Text style={styles.TextoDescricao}>{planta.fertilizante}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.DivInforma}>
                            <View style={styles.emoji}>
                                <Text style={{ fontSize: 35 }}>📍</Text>
                            </View>
                            <View style={styles.InformaTextoDiv}>
                                <Text>
                                    <Text style={styles.tituloDescricao}>ORIGEM: </Text>
                                    <Text style={styles.TextoDescricao}>{planta.origem}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.DivBotao}>
                            <View style={{ width: '100%', height: '100%', backgroundColor: '#eaead4', justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity onPress={favoritarPlantas}>

                                    <View style={{ width: 135, height: 45, backgroundColor: '#24c28d', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 22, color: 'white', marginBottom: 5, }}> + Favoritar </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.Footer}>
                <View style={styles.footerEsquerda}>
                    <TouchableOpacity onPress={handleNavigateToFeed}>
                        <Image
                            source={require('./../../../src/Icons/voltar.png')} style={{ width: 60, height: 60 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.footerMeio}>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={{ marginTop: 10 }}>
                        <Image
                            source={require('./../../../src/Icons/feed.png')} style={{ width: 68, height: 68 }}
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
        </View>
    );
}
////Fim da Função MostrarPlanta\\\\
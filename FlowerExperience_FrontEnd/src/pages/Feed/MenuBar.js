import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


function MenuBar({ onCloseMenu }) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        async function getId() {
            const idAdmin = '1';
            const id = await AsyncStorage.getItem("idUser");

            if (id === idAdmin) {
                setIsAdmin(true);
            }
        }
        getId();
    }, []);

    const navigation = useNavigation();

    const navigateToCadastro = () => {
        navigation.navigate('Cadastro');
        onCloseMenu();
    };

    const navigateToLogin = () => {
        navigation.navigate('Login');
        onCloseMenu();
    };

    const navigateToPerfil = () => {
        navigation.navigate('Perfil');
        onCloseMenu();
    };

    const navigateToAdm = () => {
        navigation.navigate('Administrador');
        onCloseMenu();
    };

    const navigateToAdd = () => {
        navigation.navigate('Adicionar');
        onCloseMenu();
    };


    return (
        <View style={styles.menuContainer}>

            {!isAdmin && (
                <>
                    <TouchableOpacity onPress={navigateToPerfil}>
                        <View style={styles.menuItem}>
                            <Icon name="user" size={20} style={styles.menuIcon} />
                            <Text style={styles.menuText}>Perfil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToCadastro}>
                        <View style={styles.menuItem}>
                            <Icon name="user-plus" size={20} style={styles.menuIcon} />
                            <Text style={styles.menuText}>Cadastro</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <View style={styles.menuItem}>
                            <Icon name="sign-in" size={20} style={styles.menuIcon} />
                            <Text style={styles.menuText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </>
            )}

            {isAdmin && (
                <>
                    <TouchableOpacity onPress={navigateToAdm}>
                        <View style={styles.menuItem}>
                            <Icon name="shield" size={20} style={styles.menuIcon} />
                            <Text style={styles.menuText}>Administrador</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToAdd}>
                        <View style={styles.menuItem}>
                            <Icon name="plus" size={20} style={styles.menuIcon} />
                            <Text style={styles.menuText}>Adicionar</Text>
                        </View>

                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        top: 100,
        left: 22,
        flex: 1,
        backgroundColor: '#24c28d',
        padding: 10,
        borderRadius: 5,
        zIndex: 2,
        elevation: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    menuIcon: {
        marginRight: 10,
    },
    menuText: {
        fontSize: 18,
        color: 'black',
    },
});

export default MenuBar;

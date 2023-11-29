import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Favoritos\\\\
export const styles = StyleSheet.create({
    grid: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    //Cima
    Header: {
        height: '10%',
    },

    iconsHeader: {
        flex: 1,
        display: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
    },
    card: {
        height: 200,
        flexDirection: 'column',
        width: '95%',
        alignItems: 'center',
    },
    principalImage: {
        height: 110,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    image: {
        height: '150px',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, // Borda arredondada
        borderWidth: 3, // Largura da borda
        borderColor: '#24c28ded', // Cor da borda
    },
    plantas: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        borderRadius: 12,
    },
    elementos: {
        height: 'auto',
        width: '65%',
        marginTop: 25,
    },
    nomePlanta: {
        height: 'auto',
        width: '100%',
    },
    descricao: {
        height: 'auto',
        width: '100%',
    },
    principalBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    btnUm: {
        backgroundColor: '#24c28ded',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
    },
    btnDois: {
        backgroundColor: 'red',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
        marginLeft: 5,
        marginRight: 5
    },
    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
        width: '90%',
        marginTop: 5,
        marginBottom: 5,
    },
    conteudo: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    titulo: {
        height: 100,
        justifyContent: 'center'
    },
    //Baixo
    Footer: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    //estilização do FooterEsquerda
    footerEsquerda: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //estilização do FooterMeio
    footerMeio: {
        height: '100%',
        backgroundColor: '#24c28ded',
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'relative',
        marginTop: -40,
        borderTopRightRadius: 450,
        borderTopLeftRadius: 500,

    },

    //estilização do FooterDireita
    footerDireita: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //estilização da ScrollTamanho
    ScrollTamanho: {
        height: window.height * 0.8, // 60% da altura da janela
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',

    },

});
////Fim do Css da Tela de Favoritos\\\\
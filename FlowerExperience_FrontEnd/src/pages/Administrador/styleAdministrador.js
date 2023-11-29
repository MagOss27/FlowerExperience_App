import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Administrador\\\\
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    //Cima
    Header: {
        height: '10%',
        backgroundColor: '#24c28d',
    },

    //Meio
    Body: {
        height: window.height * 0.80, // 60% da altura da janela
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4'
    },

    //estilização do CimaBody
    HeaderBody: {
        height: window.height * 0.2, // 60% da altura da janela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    //estilização do MeioBody
    conteudo: {
        height: '50%', // 60% da altura da janela
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        padding: 10,
    },

    //estilização do BaixoBody
    FooterBody: {
        height: window.height * 0.1, // 60% da altura da janela
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#eaead4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    //Baixo
    Footer: {
        height: '13%',
        backgroundColor: '#24c28d',
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

    //estilização dos Inputs da Tela
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#24c28d',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: window.width * 0.91, // width para computador
        backgroundColor: '#24c28d',
    },

    //estilização dos Icones dentro do Input
    icon: {
        marginRight: 10,
        color: '#8b8a7a',
    },

    //estilização da Escrita no placeholder
    input: {
        flex: 1,
        color: '#8b8a7a',
        fontSize: 18,
    },

    //estilização de todos Inputs
    labelContainer: {
        width: '100%',
        margin: 8,
    },

    //estilização da Escrita de cima Dos inputs
    labelEscritas: {
        fontSize: 22,
        color: '#8b8a7a',
    },

    //estilização dos Botões
    buttonStyle: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        width: '40%',
        height: 40,
        backgroundColor: '#24c28d',
        borderColor: '#24c28d',
        marginTop: -30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //estilização da escrita de dentro dos botões
    nomesBotao: {
        color: 'white',
        fontSize: 20,
    },

    //estilização da ScrollTamanho
    ScrollTamanho: {
        backgroundColor: '#24c28d',
    },

    Header_Body: {
        height: "10%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
        width: '90%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
    },

    btn_excluir_planta: {
        margin: 10
    },

    btn_editar_planta: {
        margin: 10
    },

    button_add_planta: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 50,
        width: '40%',
        height: 40,
        backgroundColor: '#24c28d',
        borderColor: '#24c28d',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    view_botao: {

        width: '100%',
        height: 100,
    },

    text_add_planta: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
////Fim do Css da Tela de Administrador\\\\
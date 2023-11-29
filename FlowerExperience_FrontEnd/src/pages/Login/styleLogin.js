import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Login\\\\
export const styles = StyleSheet.create({
    // Estilos para o contêiner principal
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte superior (Header)
    Header: {
        height: '10%',
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte central (Body)
    Body: {
        height: window.height * 0.80, // 80% da altura da janela
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',
    },

    // Estilos para o cabeçalho dentro da parte central
    HeaderBody: {
        height: window.height * 0.2, // 20% da altura da janela
        justifyContent: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 2,  // Flex para ocupar mais espaço vertical
        alignItems: 'center',
    },

    // Estilos para o título dentro do cabeçalho
    titleBody: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 13,
        color: '#8b8a7a',
    },

    // Estilos para o conteúdo dentro da parte central
    conteudo: {
        height: window.height * 0.5, // 50% da altura da janela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        padding: 10,
    },

    // Estilos para o rodapé dentro da parte central
    FooterBody: {
        height: window.height * 0.1, // 10% da altura da janela
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#eaead4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    //estilização dos Inputs da Tela
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#24c28d',
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#24c28d',
    },

    //estilização dos Icones dentro do Input
    icon: {
        marginRight: 10,
        color: '#FFFFFF',
    },

    //estilização da Escrita no placeholder
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 18,
    },

    //estilização de todos Inputs
    labelContainer: {
        width: '100%',
        margin: 8,
    },

    //estilização da Escrita de cima Dos inputs
    labelEscritas: {
        fontSize: 18,
        color: '#8b8a7a',
        fontWeight: 'bold',
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
        marginTop: -120,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //estilização da escrita de dentro dos botões
    nomesBotao: {
        color: '#eaead4',
        fontSize: 20,
    },


    //estilização da ScrollTamanho
    ScrollTamanho: {
        backgroundColor: '#24c28d',
    },

    esqueciSenha: {
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 15,
        color: '#2596be'
    },

    horizontalLinha: {
        borderBottomColor: '#2596be',
        borderBottomWidth: 1,
        marginTop: 2,
        marginBottom: 10,
    },

});
////Fim do Css da Tela de Login\\\\
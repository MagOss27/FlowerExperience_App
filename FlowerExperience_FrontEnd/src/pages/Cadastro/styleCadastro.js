import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Cadastro\\\\
export const styles = StyleSheet.create({
    // Estilos para o contêiner principal
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte superior (Header)
    Header: {
        height: window.height * 0.10,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte central (Body)
    Body: {
        height: window.height * 0.85,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4'
    },

    // Estilos para o cabeçalho dentro da parte central
    HeaderBody: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    // Estilos para o texto dentro do cabeçalho
    HeaderBodyText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8b8a7a',
    },

    // Estilos para o conteúdo dentro da parte central
    conteudo: {
       height: 'auto',
       width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    // Estilos para o rodapé dentro da parte central
    FooterBody: {
        height: window.height * 0.1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#eaead4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    // Estilos para a parte inferior (Footer)
    Footer: {
        height: window.height * 0.10,
        backgroundColor: '#24c28d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    // Estilos para a parte esquerda do rodapé
    footerEsquerda: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Estilos para a parte central do rodapé
    footerMeio: {
        height: '100%',
        backgroundColor: '#24c28ded',
        width: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'relative',
        marginTop: -40,
        borderTopRightRadius: 450,
        borderTopLeftRadius: 450,
    },

    // Estilos para a parte direita do rodapé
    footerDireita: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Estilos para os inputs da tela
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

    // Estilos para os ícones dentro do input
    icon: {
        marginRight: 10,
        color: '#FFFFFF',
    },

    // Estilos para o texto do placeholder
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 18,
    },

    // Estilos para todos os inputs
    labelContainer: {
        width: '100%',
        margin: 8,
    },

    // Estilos para o texto acima dos inputs
    labelEscritas: {
        fontSize: 22,
        color: '#8b8a7a',
    },

    // Estilos para os botões
    buttonStyle: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 50,
        width: '40%',
        height: 40,
        backgroundColor: '#24c28d',

        borderColor: '#24c28d',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    // Estilos para o texto dentro dos botões
    nomesBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    // Estilos para o tamanho do ScrollView
    ScrollTamanho: {
        marginVertical: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
////Fim do Css da Tela de Cadastro\\\\
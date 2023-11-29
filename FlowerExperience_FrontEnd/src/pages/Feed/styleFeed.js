import { StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Feed\\\\
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
        height: '30%',
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
       
        flexDirection: 'column',
        width: '95%',
        alignItems: 'center',
        margin: 1,
        padding: 2,
        
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
        marginBottom: 15
    },
    btn: {
        backgroundColor: '#24c28ded',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
    },
    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
        width: '90%',
        marginTop: 5,
        marginBottom: 5,
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
    ////Fim do Css da Tela de Feed\\\\
    

    
    ////Css da Tela Informativo-MostrarPlanta\\\\
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },
    //Cima
    Header: {
        height: '10%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconsHeader: {
      
        flex: 1,
        display: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
       margin: 10
    },
    conteudo: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
    //estilização do CimaBody
    HeaderBody: {
        height: window.height * 0.3, // 60% da altura da janela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
    },
    //estilização do CimaBodyEsquerda
    HeaderBodyEsquerda: {
        height: '100%',
        width: '50%',
        backgroundColor: '#eaead4',

    },
    //ImagemUm CimaBodyEsquerda
    HeaderBodyImagemUm: {
        height: '85%',
        width: '100%',
        backgroundColor: '#eaead4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //imagem
    imagemUm: {
        height: 150,
        width: 150,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#24c28d',
        borderRadius: 20,
    },
    //CimaBody Titulo da Planta
    HeaderBodyTituloPlanta: {
        height: '15%',
        width: '100%',
        backgroundColor: '#eaead4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //estilização do CimaBodyDireita
    HeaderBodyDireita: {
        height: '100%',
        width: '50%',
        backgroundColor: '#eaead4',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    //ImagemDois do CimaBodyDireita
    imagemDois: {
        height: 150,
        width: 150,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#24c28d',
        borderRadius: 20,
    },
    //Informações da planta
    DivInforma: {
        height: window.height * 0.19,
        width: '100%',
        marginTop: 10,
        borderRadius: 25,
        borderColor: '#24c28d',
        // borderWidth: '1px',
        alignItems: 'center',
        flexDirection: 'row'
    },
    //View do Botão Favoritar
    DivBotao: {
        height: window.height * 0.10,
        width: '100%',
        marginTop: 10,
        borderRadius: 25,
        borderColor: '#24c28d',
        // borderWidth: '1px',
        alignItems: 'center',
        flexDirection: 'row'
    },
    //emoji das Informações
    emoji: {
        marginLeft: 10,
        height: '130px',
        width: '75px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
    },
    imgPlantas: {
        borderRadius: 25,
    },
    //Linha de Separação das Informações
    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
        width: '90%',
        alignSelf: 'center',
    },
    //Dimensão das Informações
    InformaTextoDiv: {
        height: '80%',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 45,
        padding: 10,
    },
    tituloDescricao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8b8a7a',
    },
    //Tamanho das letras nas informações
    TextoDescricao: {
        fontSize: 16,
        color: '#8b8a7a',
        marginLeft: 15,
        marginTop: 30,
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
        // backgroundColor: '#24c28d',
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
    //estilização do Modal
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Aqui é definida a cor de fundo semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: "#eaead4",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    //   modalTitle: {
    //     fontSize: 20,
    //     marginBottom: 10,
    //     textAlign: "center",
    //     fontWeight: "bold"
    //   },
      modalDescription: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
      },
      modalButton: {
        width: 200, // Ajuste o tamanho horizontal do botão
        height: 50, // Ajuste o tamanho vertical do botão
        marginTop: 10 // Espaçamento superior do botão
        // Outros estilos desejados para o botão
      }
});
////Fim do Css da Tela Informativo-MostrarPlanta\\\\
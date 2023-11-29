import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Perfil\\
export const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#24c28d',
},

//Cima
Header: {
    height: '13%',
    backgroundColor: '#24c28d',
},

//Meio
// Body: {
    
//     height:'100%',
//     backgroundColor: 'red',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginLeft: '2%',
//     marginRight: '2%',
//     // backgroundColor: '#eaead4',
//     backgroundColor: 'blue',
//     alignItems: 'center'
// },

//estilização do CimaBody
HeaderBody: {
   width:'100%',
   padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
},

//estilização do MeioBody
conteudo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    
},

//estilização do BaixoBody
FooterBody: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: '#eaead4',
  height:'100%',
    backgroundColor: "green"
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
    alignIteyellowms: 'center',
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
    width: '100%',
    backgroundColor: '#24c28d',
},
DivisoesImputs:{

width: '100%',
marginTop: 10
},
DivisoesImputsButton:{
    
    justifyContent:'center',
    alignContent: 'center',
    flexDirection:'row',
    flexDirection:'row',
    padding:40

},


//estilização dos Icones dentro do Input
icon: {
    marginRight: 10,
    color: '#FFFFFF',
},

//estilização da Escrita no placeholder
input: {
    flex: 1,
    color:'#FFFFFF',
    fontSize: 18,
},

//estilização de todos Inputs
labelContainer: {
    width: '100%',
  
},

//estilização da Escrita de cima Dos inputs
labelEscritas: {
    fontSize: 22,
    color: '#8b8a7a',
},
button:{
justifyContent:'center',
alignItems:'center',
padding:2


},

//estilização dos Botões
buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '40%',
    height: 40,
    backgroundColor: '#24c28d',
    borderColor: '#24c28d',
   
    marginLeft:20,
    marginRight:20

    
},

//estilização da escrita de dentro dos botões
nomesBotao: {
    color: 'white',
    fontSize: 18,
},

//estilização da ScrollTamanho
ScrollTamanho: {
    height:'100%', // 60% da altura da janela
    borderRadius: 20,
    marginLeft: '2%',
    marginRight: '2%',
     backgroundColor: '#eaead4',
    
},
});
////Fim do Css da Tela de Perfil\\
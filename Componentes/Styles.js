import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container:{
    width:'100%',
    height: '100%',
    backgroundColor: '#644BFF',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  Flex2Columnas:{
    flexDirection: 'row',
    flex: 1
  },
  title:{
    fontSize:40,
    color:'white'
  },
  logo:{
    width: 150,
    height: 150
  },
  Fondo:{
    height:'100%',
    width:'100%',
  },
  Alineacion:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  Boton:{
    borderRadius: 50,
    marginBottom: 10
  },
});

export default Styles;
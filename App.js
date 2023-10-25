import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'


const styles=StyleSheet.create({
  container:{
    width:'100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#644BFF'
    
  },
  title:{
    fontSize:40,
    color:'white',
  },
  logo:{
    width: 150,
    height: 150,
  },
});

//const Fondo=requiere('.Imagenes/Fondo.png')

export default function App()
{
  return (
  <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./Imagenes/Mascota.png")}
      />
      <Text style={styles.title}>EasyMath.</Text>
  </View>
  )
}
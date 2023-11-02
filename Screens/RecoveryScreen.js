import * as React from "react"
import { View, Text, TextInput, Image, ImageBackground } from 'react-native'
import { CustomButton } from "../Componentes/Buttons"
import Styles from "../Componentes/Styles"
import { useNavigation } from "@react-navigation/native"


const RecoveryScreen = () => {

  const navigation = useNavigation();

    return (
    <View style={Styles.container}>
        <ImageBackground source={require("../Imagenes/Fondo.png")} style={Styles.Fondo}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={[Styles.title, {margin: 10}]}>EasyMath</Text>
          </View>
  
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Correo Electronico</Text>
            <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center', marginBottom: 10, borderRadius: 10}} placeholder='example@fomain.com' placeholderTextColor={'gray'}/>
            <CustomButton backgroundColor='#57D993' text="Recuperar Contraseña" color='#f1f1f1' onPress={() => navigation.navigate('RecoveryM')}/>
          </View>
  
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={[Styles.row, {justifyContent: 'space-around'}]}>
            <CustomButton backgroundColor='red' text="Volver al Login" color='#f1f1f1' onPress={() => navigation.navigate('Login')}/>
            <Image source={require("../Imagenes/Raton4.png")} style={{height: 120, width: 85}}/>
          </View>
        </View>
        </ImageBackground>
      </View>
    )
}

export default RecoveryScreen;
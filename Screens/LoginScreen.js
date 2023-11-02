import * as React from "react"
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { CustomButton } from "../Componentes/Buttons"
import Styles from "../Componentes/Styles"
import { useNavigation } from "@react-navigation/native"


const LoginScreen = () => {

  const navigation = useNavigation();

    return (
      <View style={Styles.container}>
        <ImageBackground source={require("../Imagenes/Fondo.png")} style={Styles.Fondo}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={[Styles.title, {margin: 10}]}>EasyMath</Text>
          </View>
  
          <View style={{ flex: 2, alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Nombre de Usuario/Correo Electronico</Text>
            <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center'}} placeholder='example@fomain.com' placeholderTextColor={'gray'} />
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Contraseña</Text>
            <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center'}} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>¿Olvidaste tu Contraseña?</Text>
            </TouchableOpacity>
            <CustomButton largo='50%' backgroundColor='#57D993' text="Ingresar" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
          </View>
        </ImageBackground>
      </View>
    )
}

export default LoginScreen;
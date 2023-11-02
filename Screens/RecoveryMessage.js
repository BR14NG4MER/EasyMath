import * as React from "react"
import { View, Text, ImageBackground, Image } from 'react-native'
import { CustomButton } from "../Componentes/Buttons"
import Styles from "../Componentes/Styles"
import { useNavigation } from "@react-navigation/native"


const RecoveryMessage = () => {

    const navigation = useNavigation()

    return (
    <View style={Styles.container}>
        <ImageBackground source={require("../Imagenes/Fondo.png")} style={Styles.Fondo}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={[Styles.title, {margin: 10}]}>EasyMath</Text>
            </View>
            
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Si esa cuenta existe, revise su correo electronico para restablecer su contraseña.</Text>
                <CustomButton backgroundColor='red' text="Volver al Login" color='#f1f1f1' onPress={() => navigation.navigate('Login')}/>
            </View>
            
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Image source={require("../Imagenes/Raton3.png")} style={{height: 100, width: 100}} />
                </View>
        </ImageBackground>
    </View>
    )
}

export default RecoveryMessage;
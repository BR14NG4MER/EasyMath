import React from "react"
import { View, Text, Image, ImageBackground } from 'react-native'
import { CustomButton } from "../Componentes/Buttons"
import Styles from "../Componentes/Styles"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {

  const navigation = useNavigation()

    return (
      <View style={{...Styles.container}}>
        <View style={[Styles.Flex2Columnas, {alignItems: 'center'}]}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 20, marginStart: 10}}>Bienvenido Usuario!</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image style={{height: 100, width: 100}} source={require("../Imagenes/UserIcon.png")}/>
          </View>
        </View>
  
        <View style={{flex: 1, justifyContent: 'center'}}>
        <ImageBackground source={require("../Imagenes/Tablero.png")} style={{height: 100, width: 170, alignSelf: 'center', justifyContent: 'center'}}>
          <View style={[Styles.row, {justifyContent: 'space-between'}]}>
            <View style={Styles.row}>
            <Image source={require("../Imagenes/UserIcon.png")} style={{height: 50, width: 50}}/>
            <Text style={{fontSize: 10}}>Rango:{'\n'}Aprendiz</Text>
            </View>
            <View style={Styles.row}>
            <Image source={require("../Imagenes/UserIcon.png")} style={{height: 50, width: 50}}/>
            <Text style={{fontSize: 10}}>Puntos:{'\n'}0000</Text>
            </View>
          </View>
        </ImageBackground>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={[Styles.row, {justifyContent: 'space-around'}]}>
            <CustomButton backgroundColor='red' text="Tutorial" color='#f1f1f1' onPress={() => navigation.navigate('Tutorial')}/>
            <CustomButton backgroundColor='#57D993' text="Personaliza a Chippy" onPress={() => navigation.navigate('Home')}/>
          </View>
        </View>
  
        <View style={{flex: 4, backgroundColor: '#35339C'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={[Styles.row, {justifyContent: 'space-around'}]}>
              <CustomButton backgroundColor='#1167E9' text="Sumas" color='#f1f1f1' onPress={() => navigation.navigate('Sumas')}/>
              <CustomButton backgroundColor='#1167E9' text="Restas" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={[Styles.row, {justifyContent: 'space-around'}]}>
            <CustomButton backgroundColor='#1167E9' text="Multiplicacion" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
            <CustomButton backgroundColor='#1167E9' text="Division" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={[Styles.row, {justifyContent: 'space-around'}]}>
              <CustomButton backgroundColor='#1167E9' text="Exponentes" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
            </View>
          </View>
          <View style={[Styles.row, {justifyContent: 'space-around'}]}>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Elige tu tema!</Text>
            <Image source={require("../Imagenes/Raton2.png")} style={{height: 120, width: 85}}/>
          </View>
        </View>
      </View>
    )
}

export default HomeScreen;
import React from "react"
import { View, TextInput, Text, ScrollView } from "react-native"
import { ButtonP, CustomButton } from "../Componentes/Buttons"
import { useNavigation } from "@react-navigation/native"
import Styles from "../Componentes/Styles"

const Register = () => {

    const navigation = useNavigation()

    return(
        <View
            style={{...Styles.container}}>
                <View
                    style={{
                        justifyContent: 'center',
                        margin: 20
                        }}>
                            <View 
                                style = {{
                                    width: 250,
                                    height: 75,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#6764F2',
                                    borderRadius: 15,
                                    borderWidth: 1
                                }}>
                                    <Text
                                        style = {{
                                            fontSize: 40,
                                        }}>
                                        Crear Cuenta
                                    </Text>
                            </View>
                </View>
                
                <ScrollView>
                    <View
                        style={{
                            alignItems: 'center',
                            borderWidth: 1
                            }}>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Nombre:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Apellido:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Correo Electronico:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Contraseña:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Verificar Contraseña:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Verificar Contraseña:</Text>
                            <TextInput 
                                style={{
                                    width: '55%',
                                    height: 40,
                                    borderColor: 'black',
                                    backgroundColor: '#ABA7A7',
                                    borderWidth: 2,
                                    textAlign: 'center'
                                    }}/>
                            <Text
                                style={{
                                    fontSize:40,
                                    color:'#f1f1f1'
                                    }}>Fecha de Nacimiento:</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    ustifyContent: 'space-around'
                                }}>
                                    <TextInput 
                                        style={{
                                            width: '15%',
                                            height: 40,
                                            borderColor: 'black',
                                            backgroundColor: '#ABA7A7',
                                            borderWidth: 2,
                                            textAlign: 'center',
                                            }}/>
                                    <TextInput 
                                        style={{
                                            width: '15%',
                                            height: 40,
                                            borderColor: 'black',
                                            backgroundColor: '#ABA7A7',
                                            borderWidth: 2,
                                            textAlign: 'center',
                                            }}/>
                                            <TextInput 
                                        style={{
                                            width: '15%',
                                            height: 40,
                                            borderColor: 'black',
                                            backgroundColor: '#ABA7A7',
                                            borderWidth: 2,
                                            textAlign: 'center'
                                            }}/>
                            </View>
                            <CustomButton largo='50%' backgroundColor='#57D993' text="Crear" color='#f1f1f1' onPress={() => navigation.navigate('Home')}/>
                    </View>
                </ScrollView>
        </View>
    )
}

export default Register;
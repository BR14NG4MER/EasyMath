import * as React from "react"
import { View, Text, Image, Alert, ScrollView } from "react-native"
import Styles from "../Componentes/Styles"
import { ButtonLevel } from "../Componentes/Buttons"
import { useNavigation } from "@react-navigation/native"

const SumasLevels = () => {
    
    const navigation = useNavigation();

    return (
        <View 
            style = {{
                ...Styles.container
            }}
        >
            <View
                style = {{
                    height: '30%'
                }}
            >
                <View
                    style = {{
                        flexDirection: "row",
                        justifyContent: 'space-around'
                    }}
                >
                    <Text 
                        style = {{
                            fontSize: 20, 
                            marginStart: 10,
                            textAlignVertical: 'center'
                            }}>
                            Bienvenido Usuario!
                    </Text>
                    <Image 
                        style = {{
                            height: 100, 
                            width: 100,
                            }} 
                            source={require("../Imagenes/UserIcon.png")}
                    />
                </View>
                <View 
                style = {{
                    width: 150,
                    height: 75,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor: '#6764F2',
                    borderRadius: 15,
                    borderWidth: 1
                }}
                >
                    <Text
                        style = {{
                            fontSize: 40,
                        }}
                    >
                    SUMAS
                    </Text>
                </View>
            </View>

            <View
                style = {{
                    backgroundColor: '#35339C',
                    height: '70%'
                }}
            >
                <ScrollView style = {{borderWidth: 2}}>
                    <View
                        style = {{
                            flexDirection: "row",
                            justifyContent: 'space-around'
                        }}
                    >
                        <ButtonLevel text="I" onPress={() => navigation.navigate('Level')}/>
                        <ButtonLevel text="II"/>
                        <ButtonLevel text="III"/>
                    </View>
                    <View
                        style = {{
                            flexDirection: "row",
                            justifyContent: 'space-around'
                        }}
                    >
                        <ButtonLevel text="IV"/>
                        <ButtonLevel text="V"/>
                        <ButtonLevel text="VI"/>
                    </View>
                    <View
                        style = {{
                            flexDirection: "row",
                            justifyContent: 'space-around'
                        }}
                    >
                        <ButtonLevel text="VII"/>
                        <ButtonLevel text="VIII"/>
                        <ButtonLevel text="IX"/>
                    </View>
                    <View
                        style = {{
                            flexDirection: "row",
                            justifyContent: 'space-around'
                        }}
                    >
                        <ButtonLevel text="?"/>
                        <ButtonLevel text="?"/>
                        <ButtonLevel text="?"/>
                    </View>
                </ScrollView>

                <Image 
                source = {require("../Imagenes/Raton2.png")} 
                style = {{
                    height: 120, 
                    width: 85, 
                    alignSelf: 'flex-end', 
                    marginEnd: 10
                    }}/>
            </View>
        </View>
    )
}

export default SumasLevels
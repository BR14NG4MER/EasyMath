import React from "react"
import { View, Text, Image, Linking } from 'react-native'
import { CustomButton } from "../Componentes/Buttons"
import Styles from "../Componentes/Styles"
import { useNavigation } from "@react-navigation/native"

const Tutoriales = ()=> {

    const navigation = useNavigation()
    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace: ", err));
      };

    return (
        <View style={Styles.container}>
            <View
                style = {{
                    height: '30%'
                }}>
                    <Text 
                    style = {{
                        fontSize: 40, 
                        margin: 20,
                        marginBottom: 20,
                        textAlignVertical: 'center',
                        textAlign: 'left'
                        }}>
                            Bienvenido a
                    </Text>
                <View 
                style = {{
                    width: 300,
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
                            color: "#f1f1f1"
                        }}>
                    Tutoriales
                    </Text>
                </View>
            </View>

            <View
                style = {{
                    backgroundColor: '#35339C',
                    height: '70%'
                }}>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 15
                        }}>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="1ro" color='#f1f1f1' onPress={() => openLink("https://www.youtube.com/watch?v=2TyzM_uxaVs&list=PLIlI_CNW9jPpydySBsEd2FKd2BRhQ7zWz")}/>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="2do" color='#f1f1f1' onPress={() => openLink("https://www.youtube.com/watch?v=OGRt-XTtxqc&list=PLIlI_CNW9jPoBT8VFBn-MmhkBOk1-RtCM")}/>
                </View>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-around"
                        }}>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="3ro" color='#f1f1f1' onPress={() => openLink("https://www.youtube.com/watch?v=R35VpuiolPA&list=PLIlI_CNW9jPot3YJYzJbk6Gr1cW5dFA4z")}/>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="4to" color='#f1f1f1' onPress={() => openLink("https://www.youtube.com/watch?v=W56OKTRiENo&list=PLIlI_CNW9jPo8FVMwA-KdagwvGyCR3UYA")}/>
                </View>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-around"
                        }}>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="5to" color='#f1f1f1' onPress={() => openLink("hhttps://www.youtube.com/watch?v=DmxoSbx0gN0&list=PLIlI_CNW9jPq0kfIsA3aGngvLznv3g1Ci")}/>
                            <CustomButton largo='30%' backgroundColor='#1167E9' text="6to" color='#f1f1f1' onPress={() => openLink("https://www.youtube.com/watch?v=zUK-Fha3IFQ&list=PLIlI_CNW9jPqwFVuaJiGmlzUHQ43lpT0S")}/>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: 'space-around'
                        }}>
                            <Text style = {{
                                    fontSize: 35, 
                                    margin: 10,
                                    textAlign: 'left',
                                    color: '#f1f1f1',
                                    }}>
                                        Elige el año de primaria!
                            </Text>
                            <Image 
                            source = {require("../Imagenes/Raton2.png")} 
                            style = {{
                                height: 200, 
                                width: 150, 
                                alignSelf: 'flex-end', 
                                marginEnd: 10
                                }}/>
                </View>
            </View>
        </View>
    )
}

export default Tutoriales;
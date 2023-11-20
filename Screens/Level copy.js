import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text } from "react-native"
import Styles from "../Componentes/Styles"
import { CustomButton } from "../Componentes/Buttons"
import SumasLevels from "./SumasLevels"

const Level = () => {

    const navigation = useNavigation()

    return(
        <View>
                <View
                    style={{backgroundColor: "#644BFF", width: 50, height: 30}}>
                        <CustomButton backgroundColor='red' Text='hola' largo='50' onPress={()=> navigation.navigate(SumasLevels)}/>
                </View>
        </View>
    )
}

export default Level;
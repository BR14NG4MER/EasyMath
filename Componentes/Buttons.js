import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

export function ButtonP() {
    return (
        <TouchableOpacity onPress={() => Alert.alert('hOLA')}>
            <Text>Hola</Text>
        </TouchableOpacity>

    )
}


export function CustomButton(props) {

    const { backgroundColor, text, largo, color, onPress} = props

    return (
        <TouchableOpacity
            style = {{
                ...styles.button1, 
                borderRadius: 10, 
                padding: 15, 
                width: largo, 
                backgroundColor: backgroundColor
            }} onPress={onPress}
        >
            <Text
            style = {{
                ...styles.text, 
                color: color
            }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button1: {
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonlevel: {
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
)
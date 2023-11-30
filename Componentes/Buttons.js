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

export function ButtonLevel(props) {

    const { text, onPress } = props

    return (
        <TouchableOpacity
            style = {
                styles.buttonlevel
            }
            onPress={onPress}
        >
            <Text
                style = {{
                    ...styles.text,
                    color: '#000AFF',
                    fontSize: 50
                }}
            >
                {text}
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
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#10895D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#C30303',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
)
import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

export default function TextInput(props) {

    const { label, placeholder } = props

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#020202"
    },

    input: { 
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8, 
        padding: 12,
    }
})
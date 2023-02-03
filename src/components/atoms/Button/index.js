import propTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button(props) {

    const { text, color = "#FFC700", textColor = "#020202", onPress } = props

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{ text }</Text>
            </View>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        padding: 12,
        borderRadius: 8
    }),

    text: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: textColor ,
        textAlign: 'center'
    })
})

Button.propTypes = {
    text : propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
    color: propTypes.string,
    textColor: propTypes.string,
}
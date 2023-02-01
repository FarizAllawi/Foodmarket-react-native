import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {

    const { title, caption } = props

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{title}</Text>
            <Text style={ styles.caption }>{caption}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24
    },

    title: {
        fontSize: 22,
        fontFamily: "Poppins-Medium",
        color: "#020202"
    },

    caption: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#8D92A3"   
    }
})

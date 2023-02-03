import React from 'react'
import propTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowBack } from '../../../assets'

const Header = (props) => {

    const { title, caption, onBack } = props

    return (
        <View style={ styles.container }>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
                        <View style={styles.back}>
                            <IconArrowBack />
                        </View>
                    </TouchableOpacity>
                )
            }

            <View>
                <Text style={ styles.title }>{title}</Text>
                <Text style={ styles.caption }>{caption}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerText: {
        width: "auto"
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
    },

    back: {
        padding:16,
        marginRight: 16,
        marginLeft: -10,

    },
})


Header.propTypes = {
    title: propTypes.string.isRequired,
    caption: propTypes.string,
    onBack: propTypes.func
}
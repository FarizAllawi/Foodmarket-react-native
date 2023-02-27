import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconMin, IconAdd } from '../../../assets'

const Counter = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IconMin />
            </TouchableOpacity>
            <Text style={styles.value}>14</Text>
            <TouchableOpacity>
                <IconAdd/>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginHorizontal: 14
    }
})

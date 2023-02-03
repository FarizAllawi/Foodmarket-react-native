import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button, Gap, Select } from '../../components'


const Order = ({ navigation }) => {


    return (
        <View style={styles.page}>
            <Text>Hello Order Page</Text>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    
    container: {
        backgroundColor : 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex:1
    },
})
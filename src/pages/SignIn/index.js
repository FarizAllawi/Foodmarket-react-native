import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button } from '../../components'


const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" caption="Find your best ever meal"/>
            <View style={styles.container}>

                <TextInput label="Email Address" placeholder="Type yout email address" />

                <TextInput label="Password" placeholder="Type your password"/>
                <Button/>
                <Button/>
            </View>
        </View>
    )
}

export default SignIn

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
    }
})
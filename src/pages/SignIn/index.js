import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button, Gap } from '../../components'


const SignIn = ({navigation}) => {

    const pressSignIn = () => {

        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In" caption="Find your best ever meal"/>
            <View style={styles.container}>

                <TextInput label="Email Address" placeholder="Type yout email address" />
                <Gap height={16} />

                <TextInput label="Password" placeholder="Type your password"/>
                <Gap height={24} />

                <Button text="Sign In" onPress={pressSignIn}/>
                <Gap height={12} />

                <Button color="#8D92A3" text="Create New Account" textColor="white" onPress={ () => navigation.navigate('SignUp')} />
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
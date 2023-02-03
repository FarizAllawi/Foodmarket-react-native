import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IllustrationSignUp } from '../../assets'
import { Button , Gap} from '../../components'


const SignUpSuccess = ({ navigation }) => {

    const regsterUser = () => {
        navigation.navigate('Address')
    }

    return (
        <View style={styles.page}>
            <Gap height={30} />
            <IllustrationSignUp />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Find Foods" onPress={() => {}} />
            </View>
        </View>
    )
}

export default SignUpSuccess

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },

    title: {
        marginTop: 12,
        fontSize:20,
        fontFamily: 'Poppins-Regular',
        color: "#020202"
    },

    subTitle: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8D92A3"
    },

    buttonContainer: {
        width: "100%",
        paddingHorizontal: 90
    }
    
})
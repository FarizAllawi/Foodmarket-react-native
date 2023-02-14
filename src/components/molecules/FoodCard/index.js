import React from 'react'
import { Rating } from '../../atoms'
import { StyleSheet, View, Text, Image } from 'react-native'



const FoodCard = (props) => {

    const { title, rating, picture } = props

    return (
        <View style={styles.container}>
            <Image style={styles.picture} source={picture} />
            <View style={styles.content}>    
                <Text style={styles.text}>{title}</Text>
                <Rating rating={rating}/>
            </View>
        </View>
    )
}

export default FoodCard 

const styles = StyleSheet.create({
    container: {
        width: 200,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height:7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden'
    },

    picture: {
        width: 200,
        height: 140
    },

    content: {
        padding: 12
    },

    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: "#020202"
    },

    
})
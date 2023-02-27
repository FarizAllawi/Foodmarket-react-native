import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import { FoodDummy1, IconArrowBackWhite } from '../../assets'
import { Rating, Button, Counter } from '../../components'

const FoodDetail = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ FoodDummy1 } style={styles.cover}>
                <TouchableOpacity style={styles.back}>
                    <IconArrowBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Cherry Healthy</Text>
                            <Rating rating={4.5} />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.description}>
                        Makanan khas Bandung yang cukup sering
                        dipesan oleh anak muda dengan pola makan
                        yang cukup tinggi dengan mengutamakan
                        diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Text style={styles.description}>Seledri, telur, blueberry, madu.</Text>
                </View>
                <View style={styles.footerContent}>
                    <View style={styles.priceContainer}>
                        <View><Text style={styles.labelTotal}>Total Price:</Text></View>
                        <View><Text style={styles.priceTotal}>IDR 12.289.000</Text></View>
                    </View>
                    <View style={styles.button}>
                        <Button text="Order Now"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex:1
    },
    cover: {
        height: 330,
        paddingTop:26, 
        paddingLeft: 22,
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1,
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    description: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color:"#020202",
        marginBottom: 4
    },
    footerContent: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    priceTotal: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    priceContainer: {
        flex: 1
    },
    button: {
        width: 163,
    }
})
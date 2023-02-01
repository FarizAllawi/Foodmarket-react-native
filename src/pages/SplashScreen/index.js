import React from 'react'
import { 
    View,
    Text
} from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = () => {
    return (
        <View style={{ 
                width:"100%", 
                height:"100%", 
                backgroundColor: "#FFC700",
                justifyContent: "center",
                alignItems: "center"
        }}>
            <Logo />
            <View style={{ height:38 }} />
            <Text style={{ fontSize: 32, color: "#020202", fontFamily:"Poppins-Medium"}}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen;
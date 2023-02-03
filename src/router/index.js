import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { 
    SplashScreen,
    SignIn,
    SignUp,
    SignUpAddress,
    SignUpSuccess
 } from '../pages';
const Stack = createNativeStackNavigator()

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


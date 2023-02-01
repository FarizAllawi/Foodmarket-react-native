import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
    SplashScreen,
    SignIn
 } from './pages';


export default function App() {
    return (
        <>
            <NavigationContainer>
                {/* <SplashScreen /> */}
                <SignIn/>
            </NavigationContainer>
        </>
    );
}
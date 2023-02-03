import React from 'react'
import { View } from 'react-native'

export default function Gap(props) {

    const { width, height} = props

    return (
        <View style={{ width: width, height: height}}/>
    )
}
